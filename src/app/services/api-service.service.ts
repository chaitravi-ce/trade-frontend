import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Trade } from 'src/domain/Trade';
import { User } from 'src/domain/User';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllTrades(): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/trades`)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  getAllTradesByUser(id: number): Observable<Trade[]> {
    return this.http.get<Trade[]>(`${this.apiUrl}/users/${id}/trades`)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  addAllTradesByUser(id: number, trade: Trade): Observable<Trade[]> {
    return this.http.post<Trade[]>(`${this.apiUrl}/users/add-trades/${id}`, trade)
      .pipe(
        retry(3),
        catchError(this.handleError),
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
      .pipe(
        catchError(this.handleError),
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
      .pipe(
        catchError(this.handleError),
      );
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${userId}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error("An error occurred:", error.error);
    return throwError(() => new Error("Please try again later."));
  }
}
