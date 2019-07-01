import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../core/services';
import {Page, UserInterface} from '../../../interfaces';

@Injectable()
export class UsersResolver implements Resolve<Page<UserInterface>> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot): any {
    const page: number = Number.parseInt(route.queryParams['page'], 10) || 1;
    return this.apiService.fetchUserPage(page);
  }

}
