import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {}

  onLoginSubmit() {
    const user = {
      email: this.username,
      password: this.password
    };

    // Submit to backend for validation
    this.authService.authenticateUser(user).subscribe(data => {
      console.log(data);
      if (data.token != null) {
        const validUser = {
          id: data.id,
          fullName: data.fullName,
          email: data.email
        };
        this.authService.storeUserData(data.token, validUser);
        this.flashMessagesService.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 1000
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessagesService.show('Please try again', {
          cssClass: 'alert-danger',
          timeout: 1000
        });
        this.router.navigate(['/login']);
      }
    });
  }
}
