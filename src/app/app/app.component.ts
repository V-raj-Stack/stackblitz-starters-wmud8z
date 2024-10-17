import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(5)]], // ID field validation
      password: ['', [Validators.required, Validators.minLength(8)]], // Password validation
    });
  }

  // A method to submit the form
  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Form Submitted!", this.loginForm.value);
    } else {
      console.log("Form is invalid");
    }
  }

  // Getter methods to access form controls
  get id() {
    return this.loginForm.get('id');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
