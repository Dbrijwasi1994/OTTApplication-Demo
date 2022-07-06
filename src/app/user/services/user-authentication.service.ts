import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from 'src/app/shared/DTO/user';
import { UserLoginModel } from 'src/app/shared/DTO/user-login-model';

@Injectable({
  providedIn: 'root'
})

export class UserAuthenticationService {

  SERVER_URL: string = "http://localhost:8080/api/";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private httpClient: HttpClient) { }

  public signin(user: UserLoginModel): Observable<User>{
    debugger;
    const options = user.email ? { params: new HttpParams().set('Email', user.email).set('Password', user.password) } : {};
    return this.httpClient.get<User>(this.SERVER_URL + 'users', options).pipe(
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
}
