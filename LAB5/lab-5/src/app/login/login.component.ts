// login.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle form submission
      console.log(form.value);
    }
  }
}
