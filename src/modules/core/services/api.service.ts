import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Item, Page, UserInterface} from '../../../interfaces';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  fetchUserPage(page: number): Observable<Page<UserInterface>> {
    return this.http.get<Page<UserInterface>>('https://reqres.in/api/users?page=' + page)
      .pipe(catchError(this.handleError));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<Item<UserInterface>>(`https://reqres.in/api/users/${id}`).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    );
  }

}
