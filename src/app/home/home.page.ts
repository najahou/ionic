import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public  home={
       
  name:"application de Metéo et géolocalisation",
  img:"assets/icon/r.jpg"
}

  constructor(private route:Router) {}

  onurl(){

    this.route.navigateByUrl('oneadresse');

  }


}
