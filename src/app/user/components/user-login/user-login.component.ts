import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/DTO/user';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  registerForm: any = FormGroup;
  submitted = false;
  isAdmin = false;
  message = "Welcome Back!";
  messageClass = "login-heading mb-4";

  constructor(private formBuilder: FormBuilder,
    private userAuthenticationService: UserAuthenticationService,
    private router: Router) { }

  get formControls() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.userAuthenticationService.getAllUsers().subscribe((result: User[]) => {
        var usr = result.filter(x => x.Email == this.registerForm.value.email).filter(x => x.Password == this.registerForm.value.password);
        if (usr.length == 0) {
          this.message = "Login Failed. Email or Passowrd is incorrect."
          this.messageClass = "login-heading-error mb-4";
          return;
        }
        else {
          this.isAdmin = usr[0].IsAdmin;
          this.router.navigate(['/movielist']);
        }
      }, (err) => {
        debugger;
        this.message = "Login Failed. Email or Passowrd is incorrect."
        this.messageClass = "login-heading-error mb-4";
        return;
      });
    }
  }
}
