import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'flatted';
import { Auteur } from '../models/Auteur';
import { Categorie } from '../models/Categorie';
import { Editeur } from '../models/Editeur';
import { Edition } from '../models/Edition';
import { Livre } from '../models/Livre';
import { LivreService } from '../service/livre.service';
import {flatten} from 'flat';
import { FileHandle } from '../models/FileHandle';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-page-add-livre',
  templateUrl: './page-add-livre.component.html',
  styleUrls: ['./page-add-livre.component.css']
})
export class PageAddLivreComponent implements OnInit {
  msg="";
  livre=new Livre();
  auteur1=new Auteur();
  auteur2=new Auteur();
  edition=new Edition();
  editeur=new Editeur();
  formData = new FormData();
  file!:any;
  bookForm!:FormGroup;
  constructor(private sanitizer:DomSanitizer, private router :Router, private livreService:LivreService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.livre.edition[0].editeur=this.editeur;
    this.livre.auteurs.push(this.auteur1);

  }
  

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
  addBook(bookForm:NgForm):void{
    //validate abd format
    

    const livreFormData=this.prepareFormData(this.livre);
    this.livreService.addLivre(livreFormData).subscribe(
      (response:any)=> {console.log(response);
      }
      ,
      error=>{
        console.log(error);
        this.msg=error.error;
        alert(error);
      }
    );
    console.log(flatten(this.livre));
    alert("Livre ajouté avec succes");
    bookForm.reset();
    this.livre.livreImages.splice(0);
    
  }
  onFileSelectedExcel(event) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    this.file = event.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      console.log(jsonData); // this is your Excel data
    };
    reader.readAsBinaryString(this.file);
  }


  
  onImportClick(){
    this.formData.append('file', this.file);
    this.livreService.addBooksData(this.formData).subscribe(
      response => {
        alert('File imported successfully');
      },
      error => {
        console.error('Failed to import file');
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