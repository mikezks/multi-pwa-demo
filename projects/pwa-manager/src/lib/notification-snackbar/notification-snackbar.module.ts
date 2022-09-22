import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationSnackbarComponent } from './ui/notification-snackbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    NotificationSnackbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    NotificationSnackbarComponent
  ]
})
export class NotificationSnackbarModule { }
