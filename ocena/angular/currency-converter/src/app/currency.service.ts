import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = 'http://localhost:3000/convert-currency';

  constructor(private http: HttpClient) {}

  convert(amountPLN: number): Observable<{ amountEUR: number }> {
    return this.http.get<{ amountEUR: number }>(`${this.apiUrl}?amountPLN=${amountPLN}`);
  }
}
