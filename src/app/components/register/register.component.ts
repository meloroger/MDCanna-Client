import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private flashMessageService: FlashMessagesService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessageService.show('Please fill in all fields', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessageService.show('Please use a valid email', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return false;
    }

    // Register User
    this.userService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessageService.show('You are now registered', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['/login']);
      } else {
        this.flashMessageService.show('Unsuccessful register process...', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['/register']);
      }
    });
  }
}
