import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";


  ngOnInit(): void {
    document.body.style.backgroundColor="white";
  }

   onSubmit(form: NgForm) {
      if (form.valid) {
        console.log('Login Submitted:', form.value);
        // Proceed with backend API call here
      } else {
        console.log('Form is invalid!');
      }
    }

}
