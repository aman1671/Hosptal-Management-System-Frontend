import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=='saurabh'&& password=='aadii'){
      sessionStorage.setItem('username',username);
      return true
    }
    else{
      return false
    }
  }
  isUserLoggedIn(){

    console.log('logged in');
    let user = sessionStorage.getItem('username2')

    return !(user==null)

  }
  logout(){
    sessionStorage.removeItem('username2')
  }
}
