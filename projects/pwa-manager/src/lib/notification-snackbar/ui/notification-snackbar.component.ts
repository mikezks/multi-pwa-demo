import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../logic/notification.service';

@Component({
  selector: 'app-notification-snackbar',
  templateUrl: './notification-snackbar.component.html',
  styleUrls: ['./notification-snackbar.component.scss']
})
export class NotificationSnackbarComponent {
  get message() {
    return [
      this.notificationService.appName,
      this.notificationService.message
    ].join(' ');
  }

  constructor(private notificationService: NotificationService) { }

  reload(): void {
    this.notificationService.reload();
  }

  cancel(): void {
    this.notificationService.cancel();
  }
}
