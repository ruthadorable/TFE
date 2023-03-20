import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles():null |string{
    return  localStorage.getItem('roles');
  }

  public setToken(jwtToken: string){
    localStorage.setItem('jwtToken',`${jwtToken.slice(7)}`);
  }

  public getToken():string|null{
  return localStorage.getItem('jwtToken');
  }

  public clear()
  {
    localStorage.clear();
  }

  public isLoggedIn(){
    
    return this.getRoles() && this.getToken();
  }

  
}
