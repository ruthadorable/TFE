import { Component, Inject, OnInit } from '@angular/core';
import { LivreService } from '../service/livre.service';
import {Livre} from '../models/Livre';
import { AbsoluteSourceSpan, ElementSchemaRegistry } from '@angular/compiler';
import { Auteur } from '../models/Auteur';
import { Edition } from '../models/Edition';
import { Editeur } from '../models/Editeur';
import { ImageProcessingService } from '../service/image-processing.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowBookImageDialogComponent } from '../show-book-image-dialog/show-book-image-dialog.component';

@Component({
  selector: 'app-page-livre',
  templateUrl: './page-livre.component.html',
  styleUrls: ['./page-livre.component.css']
})
export class PageLivreComponent implements OnInit {

  livres!:Livre[];
  constructor( public imagesDialog:MatDialog, private livreService:LivreService,private imageProcessingService: ImageProcessingService) { }

  ngOnInit(): void {
    this.getLivres();
  }
  public getLivres()
  {
    this.livreService.getLivres()
    .subscribe(data=>{
      data.forEach(x=> {
        console.log(x.livreImages[0]);
       if(x.livreImages[0]!=undefined && x.livreImages[0].url==undefined)
        x.livreImages[0]=this.imageProcessingService.createImages(x.livreImages[0])
        console.log(x.livreImages[0]);
      
      })
      this.livres=data;
    
      
    },
    err=>{
      console.log(err);
    });
  }
  showImages(livre:Livre)
  {
    console.log(livre.livreImages[0]);
    this.imagesDialog.open(ShowBookImageDialogComponent,{
      width:'500px',
      height:'700px',
      data : {
        images: livre.livreImages[0]
      }
    })
  }

}
function ShowProductImagesDialogComponent(ShowProductImagesDialogComponent: any, arg1: { data: { images: import("../models/FileHandle").FileHandle; }; }) {
  throw new Error('Function not implemented.');
}

