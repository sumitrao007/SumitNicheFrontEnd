import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent {
choice:string='';

  onSend(colorName:string){
    this.choice=colorName.toLowerCase().trim();
  }
}
