import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserAuthenticationService } from './services/user-authentication.service';
import { MovieService } from '../features/movies/services/movie.service';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    UserLoginComponent
  ],
  providers: [
    UserAuthenticationService
  ]
})
export class UserModule { }
