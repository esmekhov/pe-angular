import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
}
