import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../models/Livre';
import { LivreService } from '../service/livre.service';

@Component({
  selector: 'app-deletelivre',
  templateUrl: './deletelivre.component.html',
  styleUrls: ['./deletelivre.component.css']
})
export class DeletelivreComponent implements OnInit {

  displayedColumns: string[] = ['id','titre', 'resume','actions'];
  dataSource!:Livre[];
  constructor(private livreService:LivreService, private router:Router) { }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe((data)=>{

      this.dataSource=data;
      console.log(this.dataSource);
    })
  }

  delete(id:Number):any
  {
    this.livreService.deleteLivre(id).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Le livre a été supprimé! ");
        this.router.navigate(['/livres']);
      },
      (error:any)=>{
        console.log(error);
      });
      
  }
}
