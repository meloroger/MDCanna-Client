import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getHeaders(): { headers: HttpHeaders } {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.authService.getToken()
      })
    };
    return httpOptions;
  }

  fetchAllStockMovements(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:8080/stock/all',
      this.getHeaders()
    );
  }

  createStockMovement(stockMovement) {
    this.sendStockMovement(stockMovement).subscribe();
  }

  private sendStockMovement(stockMovement): Observable<any> {
    return this.http
      .post<any>(
        'http://localhost:8080/stock/create',
        stockMovement,
        this.getHeaders()
      )
      .pipe();
  }

  delteStockMovement() {
    return this.http.delete<any>(
      'http://localhost:8080/stock/delete',
      this.getHeaders()
    );
  }

  updateStockMovement(stockMovement) {
    return this.http.put<any>(
      'http://localhost:8080/stock/update',
      stockMovement,
      this.getHeaders()
    );
  }
}
