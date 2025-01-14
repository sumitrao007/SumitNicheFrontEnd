import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  isClicked:boolean=true;

  onClick(){
      if(this.isClicked){
        console.log("Click event Occur...");
        this.isClicked=false;
      }
    
  }

  onImage(){
    console.log("on Image Click...")
  }

  onSend(myinput:any){
    console.log("Data is "+myinput.value);
    myinput.style.background="green";
    myinput.style.color="white";
  }

}
