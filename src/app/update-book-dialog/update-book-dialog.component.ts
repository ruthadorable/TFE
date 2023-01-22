import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Auteur } from '../models/Auteur';
import { Editeur } from '../models/Editeur';
import { Edition } from '../models/Edition';
import { FileHandle } from '../models/FileHandle';
import { Livre } from '../models/Livre';
import { ImageProcessingService } from '../service/image-processing.service';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-update-book-dialog',
  templateUrl: './update-book-dialog.component.html',
  styleUrls: ['./update-book-dialog.component.css']
})
export class UpdateBookDialogComponent implements OnInit {

  id!:Number;
  livre:Livre=new Livre();
  livres!:Livre[];
  auteur1=new Auteur();
  auteur2=new Auteur();
  edition=new Edition();
  editeur=new Editeur();
  constructor(private sanitizer:DomSanitizer,private processImage: ImageProcessingService,public livreService:LivreService,public dialogRef: MatDialogRef<UpdateBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveData();
      
    
  }

  receiveData()
  {
    this.id=this.data.id;
    console.log(this.data.id);
    this.livre=this.data.livre;
    console.log(this.livre);
    
  }
 
  onNoClick(): void {
    this.dialogRef.close();}

  prepareFormData(livre:Livre):FormData{
      const formData=new FormData();
      formData.append(
        'livre',
        new Blob([JSON.stringify(livre)],{type:'application/json'})
      );
    
      formData.append(
        'imageFile',
        this.livre.livreImages[0].file
      )
    
    console.log(JSON.stringify(formData));
    return formData;
  }
    updateBook(bookForm:NgForm):void{
      
      
      const livreFormData=this.prepareFormData(this.livre);
      this.livreService.updateLivre(this.data.id,livreFormData).subscribe(
        (response:any)=> {console.log(response);


          console.log(this.livre);
          alert("Livre modifié avec succes");
          bookForm.reset();
          this.livre.livreImages.splice(0);
        }
       
        ,
        error=>{
          console.log(error);
          
          alert(error);
        }
      );
      
      
    }
  
    onFileSelected(event:any):void{
      if(event.target.files){
        const file= event.target.files[0];
        const fileHandle:FileHandle={
          file:file,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
        }
        this.livre.livreImages[0]=fileHandle;
      }
    }
    removeImage(){
      this.livre.livreImages.splice(0);
    }
    fileDropped(fileHandle:FileHandle){
      this.livre.livreImages[0]=fileHandle;
    }

}


