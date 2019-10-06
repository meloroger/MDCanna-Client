import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {}
  username: string;
  password: string;

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
          timeout: 5000
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessagesService.show('Please try again', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        this.router.navigate(['/login']);
      }
    });
  }
}
