import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public  home={
       
    name:"application de Metéo et géolocalisation",
    img:"assets/icon/geo.jpg"
  }
  
  constructor(private auth:AuthenticationService, private rout:Router) { }

  ngOnInit() {
  }

  onLogin(user){

    let res=this.auth.login(user.email, user.password);
       
    if(res==true){
      
      this.rout.navigateByUrl('menu/home');

    }
    else{
      this.rout.navigateByUrl('login');

    }
    
  }

  onurl(){

    this.rout.navigateByUrl('oneadresse');

  }

}
