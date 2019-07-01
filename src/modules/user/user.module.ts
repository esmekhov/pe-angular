import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import {
  MatButtonModule,
  MatCardModule,
  MatProgressSpinner,
  MatToolbar
} from '@angular/material';

@NgModule({
  declarations: [
    UserComponent,
    UserDataComponent,
    MatProgressSpinner,
    MatToolbar,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class UserModule { }
