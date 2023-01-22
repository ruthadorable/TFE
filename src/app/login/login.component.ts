import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';
import { User } from '../models/User';
import { LoginService } from '../service/login.service';
import { UserAuthService } from '../service/user-auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  email! : string;
  password!:string;
  formloginPreview$!:Observable<User>;
  constructor(
    private router: Router,
    private userService: UserService,
    private userAuthService : UserAuthService,
    private loginService: LoginService) { 
    
 
  }

  ngOnInit(): void {


  }



  login(loginForm: NgForm):void{
    this.userService.login(loginForm.value)
    .subscribe(
      (response:any)=>{
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        const role= response.user.role[0];
        localStorage.setItem('username',response.user.username);
        localStorage.setItem('prenom',response.user.prenom)
        console.log(localStorage.getItem('username'));
        if(role.roleName=='Admin'){
          localStorage.setItem('role',"Admin")
          this.router.navigate(['/admin']);
        }else{
          localStorage.setItem('role',"User")
          this.router.navigate(['/user']);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
      console.log(loginForm.value);
  }

  register() : void{
    this.router.navigate(['/register']);
  }

}
