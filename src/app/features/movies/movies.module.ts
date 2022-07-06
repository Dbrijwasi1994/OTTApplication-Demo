import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list/movie-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
