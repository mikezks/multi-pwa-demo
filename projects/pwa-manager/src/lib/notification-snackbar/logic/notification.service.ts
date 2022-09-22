import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { tap, filter, switchMap, from } from 'rxjs';
import { NotificationSnackbarComponent } from '../ui/notification-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  updateCanceled = false;
  appName = '';
  message = 'update is available, reload possible.';

  constructor(
    private snackBar: MatSnackBar,
    private swUpdate: SwUpdate
  ) {
    this.setupUpdates();
  }

  setupUpdates() {
    this.swUpdate.versionUpdates.pipe(
      tap(console.log),
      filter(e => e.type === 'VERSION_DETECTED' || this.updateCanceled),
      switchMap(() => from(this.swUpdate.activateUpdate()))
    ).subscribe(() => {
      this.snackBar.openFromComponent(NotificationSnackbarComponent);
      this.updateCanceled = true;
    });

    this.checkUpdate();
  }

  checkUpdate(): void {
    this.swUpdate.checkForUpdate();
  }

  reload(): void {
    this.swUpdate.activateUpdate().then(
      () => document.location.reload()
    );
  }

  cancel(): void {
    this.snackBar.dismiss();
  }
}
