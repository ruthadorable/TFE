import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  prenom:string|null=localStorage.getItem('prenom');

  constructor() { }

  ngOnInit(): void {
    if(this.prenom==null)
    this.prenom=localStorage.getItem('username');
  }
    

}
