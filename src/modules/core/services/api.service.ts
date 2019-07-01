import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Page, UserInterface} from '../../../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  /**
   * @Deprecated
   */
  fetchUsers(page: number): Observable<any> {
    return this.fetchUserPage(page).pipe(map(response => response.data));
  }

  fetchUserPage(page: number): Observable<Page<UserInterface>> {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(map(response => response.json()));
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(response => response.json().data));
  }

}
