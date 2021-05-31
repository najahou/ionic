import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public actif:boolean;

  constructor() { }

  public login(email:string, password:string){

 if(email=='najah.ouami@gmail.com' && password=='najah123'){
    
        this.actif=true;
 }

 else{

  this.actif=false;
 }

 return this.actif;

  }
}
