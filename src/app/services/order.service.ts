import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';
import { AuthService } from './auth.service';
import { tap, subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
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

  getOrders(): Observable<Order[]> {
    console.log('getOrders fired off..');
    return this.http
      .get<Order[]>('http://localhost:8080/order/all', this.getHeaders())
      .pipe();
  }

  createOrder(order) {
    console.log('orderService fired off..');
    if (order !== undefined) {
      this.sendOrder(order).subscribe();
    }
  }

  private sendOrder(order): Observable<Order> {
    console.log('order sent', order);
    return this.http
      .post<Order>(
        'http://localhost:8080/order/create',
        order,
        this.getHeaders()
      )
      .pipe();
  }
}
