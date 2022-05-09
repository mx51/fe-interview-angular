import { Injectable } from '@angular/core';
import { INotification } from 'src/app/models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  notifications: INotification[] = [];

  /**
   * Add a notification which will display to the user in a toast
   * @param notification 
   */
  notifyUser(notification: INotification) {
    // Let the user know what has happened.
    alert(notification.message);
  }

  /**
   * Closing the notification informs us the user has seen it
   * @param notification 
   */
  closeNotification() {

  }

}
