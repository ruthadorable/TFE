import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'medkin application';
  message = 'This is a tool for managing you books';
  init: number=3;
  public counter: number=0; 

  sleep(ms: number){
    return new Promise( resolve => setTimeout(resolve,ms));

  }
  async wait() : Promise<void> {
    console.log('Before sleep');
    this.sleep(10000);
    console.log('After sleep');
  }
  /*timer():void{
    const obs$ = interval(5000);
    const tries= obs$.subscribe((d)=>{
      console.log(d);
      this.data=d;
    });
    if(this.data ==3)
    {
      tries.unsubscribe();
      alert('3 times');
    }*/
  
    
    startCountdown(){
      if(this.init && this.init>0)
      {
        this.counter=this.init;
        this.doCountdown();
      }
      else{
        console.log('stopped');
      }
    }
    doCountdown(){
      setTimeout(()=>{
        
        this.counter--;
        console.log('auth attempt');
        this.processCountdown();

      },5000);
    }
    processCountdown()
    {
      console.log("count is", this.counter);
      if(this.counter==0){
        console.log("--counter end--");
      }
      else{
        this.doCountdown();
      }
    }

  ngOnInit()
  {
     
     

    this.startCountdown();
  }
 

}
