import { Component } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullName: string;
  email: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private flashMessageService: FlashMessagesService,
    private userService: UserService,
    private router: Router
  ) {}

  onRegisterSubmit() {
    const user = {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessageService.show('Please fill in all fields', {
        cssClass: 'alert-danger',
        timeout: 1000
      });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessageService.show('Please use a valid email', {
        cssClass: 'alert-danger',
        timeout: 1000
      });
      return false;
    }

    // Register User
    this.userService.registerUser(user).subscribe(data => {
      if (data.msg === 'success') {
        this.flashMessageService.show('You are now registered', {
          cssClass: 'alert-success',
          timeout: 1000
        });
        this.router.navigate(['/login']);
      } else {
        this.flashMessageService.show('Unsuccessful register process...', {
          cssClass: 'alert-danger',
          timeout: 1000
        });
        this.router.navigate(['/register']);
      }
    });
  }
}
