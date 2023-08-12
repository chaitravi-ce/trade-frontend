import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Trade } from 'src/domain/Trade';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private apiUrl = 'http://localhost:8080';

  constructor( private http: HttpClient ) { }

  getTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/trades`)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("An error occurred:", error.error);
    return throwError(() => new Error("Please try again later."));
  }
}
