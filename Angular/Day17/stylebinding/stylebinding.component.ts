import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  mycolor:string="red";
  rating:number=21;

  jsonObj={
    color:"blue",
    fontFamily:'cursive',
    "font-size":"32px"
  }

}
