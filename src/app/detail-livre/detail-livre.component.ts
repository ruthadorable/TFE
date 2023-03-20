import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isUnparsedPrepend } from 'typescript';
import { HomeComponent } from '../home/home.component';
import { Livre } from '../models/Livre';
import { ImageProcessingService } from '../service/image-processing.service';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {


  livre!:Livre;
  constructor(public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private router: Router){}

  ngOnInit(): void {

    this.livre=this.data;
    

  }
  public isUser():boolean{
    let value:boolean=false;
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('username')!="admin123")
    {
      value=true;
    }

    return value;
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  public reserver(id:Number):void{
    console.log("bouton clické");
    this.router.navigate(['/addreservation']);
  }







}
