import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  message : string ='Welcome to this web app'
  constructor() { }

  ngOnInit(): void {
    this.message='5';
    console.log(this.message);
  }

}
