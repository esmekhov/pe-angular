import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './services';

@NgModule({
  imports: [
    HttpModule // fixme - plan update on next meeting
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
      providers: [
        ApiService
      ]
    };
  }
}
