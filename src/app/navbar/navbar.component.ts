import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../service/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService :UserAuthService,private router :Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('role'));
  }


  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  public logout()
  {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }
  public isUser()
  {
    let value:boolean=false; 
    if(localStorage.getItem('role')=='User')
    {value=true;}
    return value;
  }

}
