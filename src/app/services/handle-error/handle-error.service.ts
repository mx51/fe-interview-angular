import { Injectable } from '@angular/core';
import { IError } from 'src/app/models/error';
import { NotificationType } from 'src/app/models/notification';
import { NotifyService } from '../notify/notify.service';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private notifyService: NotifyService) {
  }

  /**
   * Log to the system for investigation and notify the user
   * @param error 
   */
  handleError(error: IError) {
    
    this.logError(error);

    this.notifyService.notifyUser({
      message: error.humanMessage,
      type: NotificationType.Error
    });

  }

  /**
   * Log error to external provider
   * @param error 
   */
  logError(error: IError) {
    // Log the error for further analysis.
    console.log(error);
  }

}
