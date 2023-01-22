import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../models/FileHandle';
import { Livre } from '../models/Livre';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(livre:any):FileHandle
  {
    

    let livreImagesToFileHandle:FileHandle;
      
      const imageBlob:BlobPart = this.dataURItoBlob(livre.picByte,livre.type);
      const imageFile=new File([imageBlob],livre.name,{type:livre.type});
      const finalFileHandle: FileHandle={
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile)),
      };
      livreImagesToFileHandle=finalFileHandle;
    
    return livreImagesToFileHandle;
  }

  public dataURItoBlob(picBytes: any,imageType:any):BlobPart
  {
    const byteString= window.atob(picBytes);
    const arrayBuffer=new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for(let i=0;i<byteString.length ;i++){
      int8Array[i]=byteString.charCodeAt(i);
    }
    const blob=new Blob([int8Array],{type:imageType})
    return blob;
  }

}
