import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  msg="";
  user=new User();
  registerForm!:FormGroup;
  constructor( private router :Router, private userService:UserService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      'user.nom': new FormControl(null,Validators.required),
      'user.prenom': new FormControl(null,Validators.required),
      'user.username': new FormControl(null,Validators.required),
      'user.email': new FormControl(null,Validators.required),
      'user.password': new FormControl(null,Validators.required),

    });
    
  }
  seConnecter(): void{
    this.router.navigateByUrl('login');
  }

  register():void{
    this.userService.registerUser(this.user).subscribe(
      (response:any)=> {console.log(response)},
      error=>{
        console.log(error);
        this.msg=error.error;
      }
    );
    console.log(this.registerForm);
    this.router.navigate(['/login']);
  }

}
