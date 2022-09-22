import { NgModule } from '@angular/core';
import { NavModule } from './nav';
import { NotificationSnackbarModule } from './notification-snackbar';


@NgModule({
  imports: [
    NavModule,
    NotificationSnackbarModule
  ],
  exports: [
    NavModule,
    NotificationSnackbarModule
  ]
})
export class PwaManagerModule { }
