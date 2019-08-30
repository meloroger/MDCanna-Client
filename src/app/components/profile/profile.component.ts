import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    /* this.userService.getProfile().subscribe(
      profile => {
        // this.user = profile.user;
      },
      err => {
        console.log(err);
        return false;
      }
    ); */
  }
}
