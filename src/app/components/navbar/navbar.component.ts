import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {}

  getAuthService(): AuthService {
    return this.authService;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out.', {
      cssClass: 'alert-success',
      timeout: 1000
    });
    this.router.navigate(['/login']);
    return false;
  }
}
