import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
  user!:User;
  confirmpassword!:string;
  nom:string;
  prenom:string;
  username:string;
  email:string;
  password:string;
  registerForm !: FormGroup;
  constructor( private router :Router, private userService:UserService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    
    this.registerForm=this.formBuilder.group({
      'nom': ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      'prenom': ['',[Validators.required]],
      'username': ['',Validators.required],
      'email': ['',Validators.email],
      'password': ['',Validators.required],
      'confirmpassword': ['',Validators.required]

    });
  }
  seConnecter(): void{
    this.router.navigateByUrl('login');
  }

  containsNumbers(str):Boolean {
    return Boolean(str.match(/\d/));
  }

  validEmail(input:string):Boolean {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }
  register():void{
    if(this.registerForm.valid){
      this.user=new User(
        this.registerForm.get('nom').value,
        this.registerForm.get('prenom').value,
        this.registerForm.get('username').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        );
      this.userService.registerUser(this.user).subscribe(
        (response:any)=> {console.log(response)},
        error=>{
          console.log(error);
          this.msg=error.error;
        }
      );
      console.log(this.registerForm);
      this.router.navigate(['/login']);
    }else{
      alert('Le formulaire n\'est pas correctement remplis ! ');
      this.registerForm.reset();
    }
    
  }

}
