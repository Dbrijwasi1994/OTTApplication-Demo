import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './features/movies/components/add-movie/add-movie.component';
import { MovieListComponent } from './features/movies/components/movie-list/movie-list/movie-list.component';
import { UserLoginComponent } from './user/components/user-login/user-login.component';
import { UserRegisterComponent } from './user/components/user-register/user-register.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movielist', component: MovieListComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'add', component: AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
