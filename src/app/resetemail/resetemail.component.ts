import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetemailService } from 'src/app/shared/services/resetemail.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Resetemail } from './resetemail';

@Component({
  selector: 'app-resetemail',
  templateUrl: './resetemail.component.html',
  styleUrls: ['./resetemail.component.scss']
})
export class ResetemailComponent implements OnInit {
  resetemail: Resetemail = { organizerToken: '', newEmail: '' };
  show: boolean;
  params = { email: '' };
  oToken = '';
  resetemailFormGroup: FormGroup;


  constructor(
    private ResetemailService: ResetemailService,
    private arouter: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router) { }

  public fg: FormGroup;
  public isLoading = false;

  private fqdnApp = environment.fqdnApp



  ngOnInit(): void {
    this.arouter.queryParams.subscribe(params =>
      this.oToken = params.oToken)
    console.log(this.oToken);

    /*this.fg = new FormGroup({
      newEmail: new FormControl(),
    })*/


    this.resetemailFormGroup = this.fb.group({
      token: new FormControl(this.oToken, Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required, 
      ])),
    });
  }

  onsubmit() {
    if (this.resetemailFormGroup.valid) {
      let formObj = this.resetemailFormGroup.getRawValue();
      let serialized = JSON.stringify(formObj);
      console.log(serialized)
      //const { token, email } = this.resetemailFormGroup.value;
      //this.resetemail.organizerToken = token;

      //this.resetemail.newEmail = email;
      
      this.ResetemailService.resetemail(serialized).subscribe(
        res => {
          this.isLoading = false;
          alert(res.message);
        },
        err => {
          this.isLoading = false;
          alert(err.error.message);
        }
      );
    }
  }
}