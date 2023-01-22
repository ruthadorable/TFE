import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/FileHandle';
import { ImageProcessingService } from '../service/image-processing.service';

@Component({
  selector: 'app-show-book-image-dialog',
  templateUrl: './show-book-image-dialog.component.html',
  styleUrls: ['./show-book-image-dialog.component.css']
})
export class ShowBookImageDialogComponent implements OnInit {

  fileHandle!:FileHandle;
  constructor(private sanitizer:DomSanitizer,private processImage: ImageProcessingService,public dialogRef: MatDialogRef<ShowBookImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }
  receiveImages()
  {
    console.log(this.data.images)
    
    this.fileHandle=this.data.images;
    
    console.log(this.fileHandle)
  }
  onNoClick(): void {
    this.dialogRef.close();}

}
