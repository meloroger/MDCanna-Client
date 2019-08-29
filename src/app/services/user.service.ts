import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  registerUser(user): Observable<User> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>('http://localhost:8080/user/register', user, {
      headers
    });
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(
      'http://localhost:8080/user/all',
      this.getHeaders()
    );
  }

  deleteUser() {
    return this.http.delete<User>(
      'http://localhost:8080/user/delete',
      this.getHeaders()
    );
  }

  updateUser(user) {
    return this.http.put<User>(
      'http://localhost:8080/user/update',
      user,
      this.getHeaders()
    );
  }
}
