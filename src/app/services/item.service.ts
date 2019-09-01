import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Item } from '../model/item.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[];
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

  fetchAllItems(): Observable<Item[]> {
    return this.http
      .get<Item[]>(`${environment.apiUrl}/items/all`, this.getHeaders())
      .pipe(tap(data => (this.items = data)));
  }

  createItem(stockMovement) {
    this.sendItemToDb(stockMovement).subscribe();
  }

  private sendItemToDb(stockMovement): Observable<any> {
    return this.http
      .post<any>(
        `${environment.apiUrl}/items/create`,
        stockMovement,
        this.getHeaders()
      )
      .pipe();
  }

  deleteItem(item) {
    return this.http.delete<any>(
      `${environment.apiUrl}/items/delete`,
      this.getHeaders()
    );
  }

  updateItem(item) {
    return this.http.put<any>(
      `${environment.apiUrl}/items/update`,
      item,
      this.getHeaders()
    );
  }

  getItems() {
    return this.items;
  }
}
