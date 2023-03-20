import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './service/user-auth.service';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {

  userservice!:UserService;
  router!:Router;
  constructor(userservice: UserService, router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var role = localStorage.getItem('role');
    if (role == null || role == undefined) {
      role = '';
    }
    console.log(role);
    console.log(route.data['role']);
    console.log(role.includes(route.data['role']));
    const isAuthorized = role.includes(route.data['role']);
    if(! isAuthorized){
      alert("Not authorized user !");
      this.router.navigate(['/']);
    }
    return role.includes(route.data['role']);
  }
  
  
}
