import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myid:number=9;

  constructor(private router:Router){}

  onPage1(){
    this.router.navigate(['/page1']);
  }

  onPage2(){
    this.myid=8;
    this.router.navigate(['/page2',this.myid]);
  }

  onFollower(){
    this.router.navigate(['/follower']);
  }


}
