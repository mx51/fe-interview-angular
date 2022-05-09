import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { createGuid } from 'src/app/shared/create-guid';
import { environment } from 'src/environments/environment';
import { HandleErrorService } from '../handle-error/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private handleErrorService: HandleErrorService) { }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(environment.apiUrl + path).pipe(
      catchError(this.handleError)
    )
  }

  post<T>(path: string, command: T): Observable<T> {
    return this.http.post<T>(environment.apiUrl + path, command).pipe(
      catchError(this.handleError)
    )
  }

  handleError = (error: HttpErrorResponse) => {

    this.handleErrorService?.handleError({
      id: createGuid(),
      time: new Date(),
      error: error,
      humanMessage: 'Hmm, that did not work. Please contact 1300 HUNGRY and we can help you with your order right away'
    });

    return throwError(() => new Error());
  }

}
