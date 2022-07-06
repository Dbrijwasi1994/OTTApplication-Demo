import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Movie } from 'src/app/features/movies/DTO/movie';
import { catchError, Observable, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators'
import { UserLoginModel } from 'src/app/shared/DTO/user-login-model';
import { User } from 'src/app/shared/DTO/user';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.SERVER_URL + 'movies').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.SERVER_URL + 'users').pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  public signin(user: UserLoginModel): Observable<User>{
    debugger;
    const options = user.email ? { params: new HttpParams().set('Email', user.email).set('Password', user.password) } : {};
    return this.httpClient.get<User>(this.SERVER_URL + 'users', options).pipe(
      map((res) => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
