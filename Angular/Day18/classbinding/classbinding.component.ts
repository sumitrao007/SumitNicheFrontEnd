import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent {
  myclass:string='success';
  rating:number=21;
  isError:boolean=false;
  isSpecial:boolean=true;

  jsonObj={
    "success":!this.isError,
    "danger":this.isError,
    "special":this.isSpecial
  }

  

}
