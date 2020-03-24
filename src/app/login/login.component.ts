import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Organizerlogin } from '../shared/models/organizerlogin';
import { FormsModule } from '@angular/forms';
import { OrganizerloginService } from '../shared/services/organizerlogin.service';
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err = false;
  fbSub;
  

  organizerlogin: Organizerlogin = { email_address: '', password: '' };
  constructor(
    private as: AuthService,
    private router: Router,
    private organizerloginService: OrganizerloginService,
    private cookieService: CookieService
  ) { }


  ngOnInit() {
  }
username:String;
password:String;
  onSubmit() {
    var   user  = {
      "email_address" : this.username,
      "password" : this.password
    }
    console.log();
    this.organizerloginService.Organizerlogin(user)
      .subscribe(res => {
        if (res.OrganizerID) {
          this.cookieService.set("OrganizerID", res.OrganizerID);
          this.router.navigate(['/users/organizer']);
        } else {
          this.err = true;
        }
      });
  }
}
