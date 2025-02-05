import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  constructor(private router:Router){}

  ngOnInit(): void {
    document.body.style.backgroundColor="white";
  }

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      // Proceed with backend API call here
    } else {
      console.log('Form is invalid!');
    }
  }
}
