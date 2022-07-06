import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../DTO/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movielist: Movie[] = [];
  messageText: string = '';
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => {
      this.movielist = data;
    });
  }

  public SearchMovies(txtSearch: string) {
    if (txtSearch != null && txtSearch != '') {
      this.movieService.getAllMovies().subscribe((data: Movie[]) => {
        var filteredMovies = data.filter(x => x.Title.includes(txtSearch));
        if (filteredMovies.length == 0) {
          this.messageText = 'No movies or TV shows found.';
          this.movielist = [];
        }
        else {
          this.messageText = ''
          this.movielist = filteredMovies;
        }
      });
    }
    else {
      this.movieService.getAllMovies().subscribe((data: Movie[]) => {
        this.movielist = data;
        this.messageText = ''
      });
    }
  }

  public goToAddMovie() {
    this.router.navigate(['/add']);
  }
}
