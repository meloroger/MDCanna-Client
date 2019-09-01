import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order.model';
import { AuthService } from './auth.service';
import { tap, subscribeOn } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
      .get<Order[]>(`${environment.apiUrl}/order/all`, this.getHeaders())
      .pipe();
  }

  createOrder(order: Order) {
    console.log('orderService fired off..');
    if (order !== undefined) {
      this.sendOrder(order).subscribe();
    }
  }

  private sendOrder(order: Order): Observable<Order> {
    console.log('order sent', order);
    return this.http
      .post<Order>(
        `${environment.apiUrl}/order/create`,
        order,
        this.getHeaders()
      )
      .pipe();
  }

  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(
      `${environment.apiUrl}/order/delete/${id}`,
      this.getHeaders()
    );
  }

  updateOrder(order: Order): Observable<Order> {
    console.log('orderService..');
    return this.http.put<Order>(
      `${environment.apiUrl}/order/update`,
      order,
      this.getHeaders()
    );
  }
}
