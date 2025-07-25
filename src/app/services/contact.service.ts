import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
  details?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiUrl = environment.production 
    ? 'https://your-domain.com/api' 
    : 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  sendContactMessage(formData: ContactFormData): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.apiUrl}/contact`, formData)
      .pipe(
        timeout(30000), // 30 second timeout
        catchError(this.handleError)
      );
  }

  testEmailService(): Observable<ContactResponse> {
    return this.http.get<ContactResponse>(`${this.apiUrl}/contact/test`)
      .pipe(
        timeout(10000), // 10 second timeout
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = 'Network error. Please check your internet connection.';
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = error.error?.error || 'Please check your form data and try again.';
          break;
        case 429:
          errorMessage = 'Too many requests. Please wait a few minutes before trying again.';
          break;
        case 500:
          errorMessage = error.error?.error || 'Server error. Please try again or contact me directly at kjburriss@gmail.com.';
          break;
        case 0:
          errorMessage = 'Unable to connect to server. Please make sure the backend is running.';
          break;
        default:
          errorMessage = `Error ${error.status}: ${error.error?.error || 'Please try again later.'}`;
      }
    }

    console.error('Contact service error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
