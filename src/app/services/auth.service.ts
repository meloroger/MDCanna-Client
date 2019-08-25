import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: User;
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {}

  registerUser(user): Observable<User> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>('users/register', user, {
      headers
    });
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>('users/authenticate', user, {
      headers
    });
  }

  getProfile(): Observable<User> {
    this.loadToken();
    const httpOptions = {
      headers: {
        Authorization: this.authToken
      }
    };
    return this.http.get<User>('users/profile', httpOptions);
  }

  // JWT by default looks for 'id_token' in local storage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    this.authToken = token;
    this.user = user;
    this.isLoggedIn = true;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    }
    return this.isLoggedIn;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
