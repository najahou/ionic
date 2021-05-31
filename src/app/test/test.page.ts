import { Component, OnInit } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() { }

  ngOnInit() {
      const map = new Map({
        basemap: "topo-vector" //Reference to the base of the map
      });
  
      const view = new MapView({
        container: "container", // Reference to the view div 
        map: map, // Reference to the map object created before the view
        zoom: 4, // Sets zoom level based on level of detail (LOD)
        center: [15, 56] // Sets center point of view using longitude,latitude
      });
  
    }

}
