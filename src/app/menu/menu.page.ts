import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

menu=[
  {
    title:'Home',url:'/menu/home',icon:'home'
  },
  {
    title:'Metéo',url:'',icon:'home'
  },
  {
    title:'log out',url:'',icon:'home'
  }
]

  constructor(private route:Router) { }

  ngOnInit() {
  }


  onMenuItem(i){
this.route.navigateByUrl(i.url);
  }

}
