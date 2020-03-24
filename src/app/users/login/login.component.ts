import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Organizerlogin } from '../../shared/models/organizerlogin';

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
  ) { }

  ngOnInit() {
  }

  onSubmit(user) {
    console.log(user);
    this.as.login(user)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/products']);
        } else {
          this.err = true;
        }
      });
  }
}
