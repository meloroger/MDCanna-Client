import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { StockMovement } from '../model/stock-movement.model';

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

  fetchAllStockMovements(): Observable<StockMovement[]> {
    return this.http.get<StockMovement[]>(
      'http://localhost:8080/stock/all',
      this.getHeaders()
    );
  }

  createStockMovement(stockMovement: StockMovement) {
    this.sendStockMovement(stockMovement).subscribe();
  }

  private sendStockMovement(
    stockMovement: StockMovement
  ): Observable<StockMovement> {
    return this.http
      .post<StockMovement>(
        'http://localhost:8080/stock/create',
        stockMovement,
        this.getHeaders()
      )
      .pipe();
  }

  delteStockMovement() {
    return this.http.delete<StockMovement>(
      'http://localhost:8080/stock/delete',
      this.getHeaders()
    );
  }

  updateStockMovement(stockMovement: StockMovement) {
    return this.http.put<StockMovement>(
      'http://localhost:8080/stock/update',
      stockMovement,
      this.getHeaders()
    );
  }
}
