import { Component } from '@angular/core';
import { NotificationService } from '@workspace/pwa-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private notificationService: NotificationService) {
    this.notificationService.appName = 'App ONE'
  }

  checkUpdate(): void {
    this.notificationService.checkUpdate();
  }
}
