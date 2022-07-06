import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  submitted = false;
  message = "New User Registration!";

  constructor(private formBuilder: FormBuilder) { }

  get formControls() { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.required]],
      username: ['', [Validators.required, Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dateofbirth: ['', [Validators.max(10)]],
      phone: ['', [Validators.max(10)]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
  }
}
