import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

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
    return this.http.post<User>(`${environment.apiUrl}/user/register`, user, {
      headers
    });
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(
      `${environment.apiUrl}/user/all`,
      this.getHeaders()
    );
  }

  deleteUser() {
    return this.http.delete<User>(
      `${environment.apiUrl}/user/delete`,
      this.getHeaders()
    );
  }

  updateUser(user) {
    return this.http.put<User>(
      `${environment.apiUrl}/user/update`,
      user,
      this.getHeaders()
    );
  }

  createUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post<User>('http://localhost:3000/config/create-user', user, { headers })
      .pipe();
  }
}
