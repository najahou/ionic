import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';   
import Zoom from '@arcgis/core/widgets/Zoom';

@Component({
  selector: 'app-oneadresse',
  templateUrl: './oneadresse.page.html',
  styleUrls: ['./oneadresse.page.scss'],
})
export class OneadressePage implements OnInit {

  private dataCity:any;

  constructor(private http:HttpClient) { }

  private x;
  private y;

  ngOnInit() {
  

  
  }

  onSearch(value){ 
  
    this.http.get("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?city="+ value.city +"&f=json")
    .subscribe(data=>{
      this.dataCity=data;
           this.x=this.dataCity.candidates[1].location.x;
           this.y=this.dataCity.candidates[1].location.y;

           console.log(this.x);
           console.log(this.y);
    },err=>{
      console.log(err);
    });
    const map = new Map({
      basemap: "topo-vector" //Reference to the base of the map
    });

    const view = new MapView({
      container: "container", // Reference to the view div 
      map: map, // Reference to the map object created before the view
      zoom: 14, // Sets zoom level based on level of detail (LOD)
      center: [this.x,this.y] // Sets center point of view using longitude,latitude
    });
  }
}

