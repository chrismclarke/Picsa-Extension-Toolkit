import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { File } from '@ionic-native/file';
import * as c3 from 'c3';
import * as Papa from 'papaparse';
import { Platform } from 'ionic-angular';
declare let d3;

@Injectable()
export class C3ChartProvider {
  public datasets: any;
  public columns: any;
  public chart: any;
  public activeChart: any = {};
  public lineToolValues: any = {};
  public lineToolActive: boolean = false;
  site: any;
  columnsObserver: any;
  initialRender: boolean = true;
  crops: any;
  constructor(public http: Http, private file: File, private platform: Platform) {
    this.activeChart.x = "Length_of_Season_A"
    this.loadData()
    this.crops = [
      { index:0,name: 'Maize', waterMin: 500, waterMax: 800, waterAvg: 720, lengthAvg: 60, image: "assets/img/crops/maize.jpg" },
      { index:1,name: 'Groundnuts', waterMin: 500, waterMax: 700, waterAvg: 600, lengthAvg: 90, image: "assets/img/crops/groundnuts.jpg" },
      { index:2,name: 'Sorghum', waterMin: 450, waterMax: 650, waterAvg: 550, lengthAvg: 120, image: "assets/img/crops/sorghum.jpg" },
    ]
  }
  loadData() {
    if (this.platform.is('core')) {
      //use file api
      console.log('loading demo data')
      this.datasets = sampleDatasets
    }
    if (this.platform.is('mobile')) {
      //use cordova
      this.file.checkDir(this.file.dataDirectory, 'mydir')
        .then(_ => console.log('Directory exists'))
        .catch(err => console.log('Directory doesnt exist'));
    }
  }

  generate(x) {
    var s = this.site
    console.log('s', s)
    var keys = []
    for (let key in s.data[0]) { keys.push(key) }
    this.chart = c3.generate({
      bindto: '#chart',
      data: {
        json: s.data,
        hide: true,
        keys: {
          value: keys
        },
        classes: { LineTool: 'LineTool' },
        color: function (color, d) {
          if (d.value >= this.lineToolValues[this.activeChart.x]) {
            return '#739B65'
          }
          if (d.value < this.lineToolValues[this.activeChart.x]) {
            return '#BF7720'
          }
          return seriesColors[this.activeChart.x]
        }.bind(this)
      },
      legend: {
        hide:true
      },
      point: {
        r: function (d) {
          // if(d.value>this.lineToolValue){
          //   return 8
          // }
          return 5
        }.bind(this)
      },
      onrendered: function () {
        this.firstRender()
      }.bind(this)
    })
    //this.chart.show("SeasonA")
    // this.chart.show("Year")

  }

  firstRender() {
    if (this.initialRender) {
      // this.setChart({ x: 'Total Rainfall SeasonA' })
      this.initialRender = false
    }
  }
  setDataset(site) {
    this.site = site
    return new Promise((resolve, reject) => {
      Papa.parse(site.FilePath, {
        download: true,
        dynamicTyping: true,
        header: true,
        complete: function (res, file) {
          this.site.data = res.data
          console.log('site', this.site)
          //create first dummy set
          this.generate('Total Rainfall SeasonA')
          resolve(this.site)
        }.bind(this),
        error: function (err) { reject(err) }
      }, )
    })
  }
  setChart(chart) {
    if (this.chart) {
      console.log('setting chart', chart.x)
      this.activeChart = chart
      this.chart.hide();
      this.chart.legend.hide();
      this.chart.show(chart.x, {withLegend: true});
      console.log('this.chart', this.chart)
    //this.chart.show()
    }
  }
  setLineToolValue(value) {
    this.lineToolValues[this.activeChart.x] = value
    var lineArray = Array(this.site.data.length).fill(value)
    lineArray.unshift('LineTool')
    this.chart.load({
      columns: [lineArray],
      classes: { LineTool: 'LineTool' }
    });
    this.chart.show('LineTool', { withLegend: true });
  }
  calculateProbabilities(value) {
    let points = this.chart.data.values(this.activeChart.x)
    let above = 0, below = 0, ratio = [0, 0]
    for (let point of points) {
      if (point != null) {
        if (point >= value) { above++ }
        else { below++ }
      }
    }
    var percentage = (above / (above + below) * 100);
    var reversePercentage = (below / (above + below) * 100);
    var i = Math.round((below + above) / (above))
    var j = Math.round((below + above) / (below))
    if (above != 0 && above <= below) { ratio = [1, i - 1] }
    if (below != 0 && below <= above) { ratio = [j - 1, 1] }
    return {
      above: above,
      below: below,
      percentage: percentage,
      reversePercentage: reversePercentage,
      ratio: ratio
    }
  }
  calculateProbability(conditions) {
    //conditions are defined in format {key1:valueToTest1, key2:valueToTest2...}
    var data = this.site.data
    //remove values where conditions aren't known - current assumes null values non-numerical (e.g. string or null, may want to change later)
    for (let condition of conditions) {
      var key = condition.key;
      var value = condition.value
      data = data.filter(element => {
        return typeof(element[key]) == 'number'
      });
    }
    //filter based on coditions
    var length = data.length
    for (let condition of conditions) {
      var key = condition.key;
      var value = condition.value
      if (condition.operator == '>=') {
        data = data.filter(element => {
          return element[key] >= value
        });
      }
      if (condition.operator == '<=') {
        data = data.filter(element => {
          return element[key] <= value
        });
      }
    }
    return {
      results:data,
      percentage: data.length / length,
      reversePercentage: 1-data.length/length
    }

  //   //given a given variable tests number of items above and below the value
  //   //above translates to season starting later, more rainfall required  
  //   let above = 0, below = 0, ratio = [0, 0], percentage = 0, reversePercentage = 0
  //   let d = this.site.data
  //   console.log('data', d)
  //   for (let item of d) {
  //     var test = item[columnName]
  //     if (test != null && test != columnName) {
  //       if (test >= value) { above++ }
  //       if (test < value) { below++ }
  //     }
  //   }
  //   percentage = (above / (above + below));
  //   reversePercentage = 1 - percentage
  //   console.log('percentag', percentage)
  //   console.log('revers', reversePercentage)
  //   return {
  //     above: above,
  //     below: below,
  //     percentage: percentage,
  //     reversePercentage: reversePercentage,
  //     ratio: ratio
  //   }
   }
}

var seriesColors = {
  "Total Rainfall SeasonA": '#377eb8',
  "StartSeason_A": '#e41a1c',
  "EndSeason_A": '#984ea3',
  "Length_of_Season_A": '#4daf4a',
}

let sampleDatasets = [
  {
    "SiteName": "Babile", "Latitude": 10.519819, "Longitude": -2.835273, "FilePath": "assets/datasets/Babile.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Bole", "Latitude": 9.0333, "Longitude": -2.4833, "FilePath": "assets/datasets/Bole.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Damango", "Latitude": 9.0833, "Longitude": -1.8167, "FilePath": "assets/datasets/Damango.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Navrongo", "Latitude": 10.894025, "Longitude": -1.092147, "FilePath": "assets/datasets/Navrongo.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Salaga", "Latitude": 8.552529, "Longitude": -0.518694, "FilePath": "assets/datasets/Salaga.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Vea", "Latitude": 10.866667, "Longitude": -0.85, "FilePath": "assets/datasets/Vea.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Wa", "Latitude": 10.060074, "Longitude": -2.509891, "FilePath": "assets/datasets/Wa.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Walewale", "Latitude": 10.35, "Longitude": -0.8, "FilePath": "assets/datasets/Walewale.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Yendi", "Latitude": 9.4450, "Longitude": -0.0093, "FilePath": "assets/datasets/Yendi.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
  {
    "SiteName": "Zuarungu", "Latitude": 10.7961, "Longitude": -0.8080, "FilePath": "assets/datasets/Zuarungu.csv"
    , "AvailableData": ["SeasonRainfall", "LengthOfSeason", "SeasonStart", "SeasonEnd"/*, "Temperature"*/]
  },
]
