import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  fullName: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.user = this.authService.loadUser();
    console.log(this.user);
    /*  Todo: create Path to call one user from database */
  }

  onUpdateSubmit(): void {
    const user = {
      fullName: this.fullName,
      email: this.email
    };
    this.userService.updateUser(user).subscribe();
  }

  onDeleteAccount(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    this.userService.deleteUser(user.id).subscribe(__ => {
      this.authService.logout();
      this.router.navigate(['/']);
    });
  }
}
