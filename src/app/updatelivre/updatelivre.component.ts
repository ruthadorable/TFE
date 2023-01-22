import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Livre } from '../models/Livre';
import { LivreService } from '../service/livre.service';
import { UpdateBookDialogComponent } from '../update-book-dialog/update-book-dialog.component';

@Component({
  selector: 'app-updatelivre',
  templateUrl: './updatelivre.component.html',
  styleUrls: ['./updatelivre.component.css']
})
export class UpdatelivreComponent implements OnInit {


  displayedColumns: string[] = ['id','titre', 'resume','actions'];
  dataSource!:Livre[];
  constructor(private updateDialog :MatDialog, private livreService:LivreService) { }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe((data)=>{

      this.dataSource=data;
      console.log(this.dataSource);
    })


  }
  updateDetails(livreId: Number,livre:Livre)
  {
    console.log(livreId);
    this.updateDialog.open(UpdateBookDialogComponent,{
      width:'1200px',
      height:'850px',
      data : {
        id: livreId,  
        livre: livre  }
    })
  }

}
