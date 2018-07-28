import { Component } from "@angular/core";
import * as L from "leaflet";
import "leaflet-ajax";
import { ClimateToolActions } from "../../climate-tool.actions";
import { GEOJSON, SITES } from "../../climate-tool.data";
import { ISite } from "../../climate-tool.models";

@Component({
  selector: "site-select",
  templateUrl: "site-select.html"
})
export class SiteSelectComponent {
  map: any;

  constructor(private actions: ClimateToolActions) {}

  ngOnInit() {
    this.mapInit();
    this.sitesInit();
  }
  // create map base layers and set malawi geojson
  mapInit() {
    this.map = L.map("siteSelect", {
      attributionControl: false
    });
    const osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const osmAttrib =
      'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    const osm = new L.TileLayer(osmUrl, {
      minZoom: 1,
      maxZoom: 15,
      attribution: osmAttrib
    });
    this.map.setView(new L.LatLng(-13.7, 33.21), 6);
    const geojsonLayer = L.geoJSON(GEOJSON.malawiAdmin, {
      onEachFeature: this.setFeature.bind(this),
      middleware: function(data) {
        return data;
      },
      style: this._getStyle()
    });
    geojsonLayer.addTo(this.map);
    this.map.fitBounds([[-16.01463, 34.7183], [-15.34875, 35.13236]]);
    // this.map.on('click',function(e){
    //   console.log('clicked')
    // })
  }

  sitesInit() {
    for (const site of SITES) {
      console.log("site", site);
      const marker = L.marker([site.latitude, site.longitude], {
        icon: weatherIcon
      });
      const container = L.DomUtil.create("div");
      const btn = L.DomUtil.create("button", "", container);
      btn.setAttribute("type", "button");
      btn.innerHTML = `<div class="site-select-button">${site.name} 🡺</div>`;
      const popup = L.popup().setContent(btn);
      L.DomEvent.on(btn, "click", btn => {
        this.selectSite(site);
      });
      marker.bindPopup(popup);
      marker.addTo(this.map);
      marker.on({
        click: function(e) {
          console.log("marker clicked", e);
        }.bind(this)
      });
    }
  }

  setFeature(feature, layer) {
    const exceptions = {
      "TA Kapeni": [-15.60583, 35.00381],
      "TA Machinjili": [-15.67858, 35.07111]
    };
    layer.on({
      click: function(e) {
        console.log("e", e);
      }.bind(this)
    });

    //automatically bind tooltips to centre of feature, unless want to manually specify from exceptions
    if (!exceptions[feature.properties.NAME_1]) {
      layer.bindTooltip(feature.properties.NAME_1, {
        permanent: true,
        direction: "center",
        className: "countryLabel"
      });
    } else {
      const latLon = exceptions[feature.properties.NAME_1];
      const label = L.marker(latLon, {
        icon: L.divIcon({
          html: "",
          iconSize: [0, 0]
        })
      }).addTo(this.map);
      label.bindTooltip(feature.properties.NAME_1, {
        permanent: true,
        direction: "center",
        className: "countryLabel"
      });
    }
  }

  _getStyle() {
    return {
      fillColor: "#f0d1b1",
      fillOpacity: 1,
      color: "#000000",
      opacity: 1,
      weight: 2
    };
  }
  selectSite(site: ISite) {
    this.actions.selectSite(site);
  }
}

const weatherIcon = L.icon({
  iconUrl: "assets/img/station.png",
  shadowUrl: "leaf-shadow.png",
  iconSize: [38, 38], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
