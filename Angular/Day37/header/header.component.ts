import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username!:string|null;
  role!:string|null;

  constructor(private router:Router){}

  ngOnInit(): void {
   this.username=sessionStorage.getItem("username");
   this.role=sessionStorage.getItem("role");
  }

  onLogOut(){
    sessionStorage.clear();
    this.role=null;
    this.username=null;
    this.router.navigate(['']);
  }

}
