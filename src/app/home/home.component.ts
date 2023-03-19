import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafeUrl } from '@angular/platform-browser';
import { DetailLivreComponent } from '../detail-livre/detail-livre.component';
import { Livre } from '../models/Livre';
import { ImageProcessingService } from '../service/image-processing.service';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livres!:Livre[];

  term!:string;
  
  constructor(private detailsDialog :MatDialog,private livreService:LivreService,private imageProcessingService:ImageProcessingService) { }

  ngOnInit(): void {
    this.getLivres();
  }

  public detailsLivre(livre:Livre){
    this.detailsDialog.open(DetailLivreComponent,{
      height:'800px',
      width:"1200px",
      data: livre
    });
  }

  public getLivres()
  {
    this.livreService.getLivres()
    .subscribe(data=>{
      data.forEach(x=> {
        if(x.livreImages[0]!=undefined)
        x.livreImages[0]=this.imageProcessingService.createImages(x.livreImages[0])
        console.log(x.livreImages[0]);
        
      })
      this.livres=data;
      
      
    },
    err=>{
      console.log(err);
    });
  }

}
