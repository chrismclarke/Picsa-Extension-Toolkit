import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as L from 'leaflet';
import 'leaflet-ajax';


@IonicPage()
@Component({
  selector: 'site-select',
  templateUrl: 'site-select.html',
})
export class SiteSelectPage {
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
***REMOVED***

  ionViewDidLoad() {
    
    this.map = L.map('siteSelect',{
      attributionControl:false
  ***REMOVED***);
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, { minZoom: 1, maxZoom: 15, attribution: osmAttrib });
    // start the map in South-East England
    this.map.setView(new L.LatLng(-13.70, 33.21), 6);
    // this.map.addLayer(osm);
    //cast L to any as typings sometimes not working
    let geojsonLayer:any = new (<any>L).geoJson.ajax("assets/geoJson/Malawi-admin-2-Blantyre.geojson", {
      onEachFeature: this.setFeature.bind(this),
      middleware: function (data) {
        return data
    ***REMOVED***,
      // filter:filterFunction
      style: this._getStyle()
  ***REMOVED***)
    geojsonLayer.addTo(this.map)
    // console.log('geojson bounds',geojsonLayer.getBounds())
    this.map.fitBounds([
      [-16.01463, 34.71830], [-15.34875, 35.13236]
    ])
    // this.map.on('click',function(e){
    //   console.log('clicked')
    // })
    
***REMOVED***

  setFeature(feature, layer) {
    var exceptions = {
    "TA Kapeni": [-15.60583, 35.00381],
    "TA Machinjili": [-15.67858, 35.07111]
  ***REMOVED***
    layer.on({
                mouseover: function () {
                    this.setStyle({
                        'fillColor': '#b45501',
                  ***REMOVED***);
              ***REMOVED***,
                mouseout: function () {
                    this.setStyle({
                        'fillColor': '#f0d1b1',
                  ***REMOVED***);
              ***REMOVED***,
                click: function (e) {
                    // console.log('feature',feature)
                    console.log('e',e)
                    e.target.setStyle({
                        'fillColor': '#80FF9F',
                        'fillOpacity':1
                  ***REMOVED***);
                    this.selectSite(e)
                    //possible add code to recolour previous points
                    //e.g. https://stackoverflow.com/questions/25773389/changing-the-style-of-each-feature-in-a-leaflet-geojson-layer
              ***REMOVED***.bind(this)
  ***REMOVED***)

    
    //automatically bind tooltips to centre of feature, unless want to manually specify from exceptions
    if(!exceptions[feature.properties.NAME_2]){
      layer.bindTooltip(feature.properties.NAME_2, {permanent:true,direction:'center',className: 'countryLabel'});  
  ***REMOVED***
    else{
      var latLon=exceptions[feature.properties.NAME_2]
      var label = L.marker(latLon,{
          icon: L.divIcon({
            html: '',
            iconSize: [0, 0]
      ***REMOVED***)
    ***REMOVED***).addTo(this.map)
      label.bindTooltip(feature.properties.NAME_2, {permanent:true,direction:'center',className: 'countryLabel'});
  ***REMOVED***
***REMOVED***
  
  _getStyle(){
    return{
      fillColor: "#f0d1b1",
      fillOpacity: 1,
      color: '#000000',
      opacity: 1,
      weight: 2
  ***REMOVED***
***REMOVED***
  selectSite(e){
    let data = e.target.feature.properties
    this.viewCtrl.dismiss(data);
***REMOVED***
  
  

}