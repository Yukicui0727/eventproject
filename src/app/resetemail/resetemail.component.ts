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
  resetemail: Resetemail = { organizerToken: '', newemail: '', resetemail: '' };
  currTime: number;
  disable = 'disabled';
  show: boolean;
  params = { email: '' };
  cToken = '';
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
      this.cToken = params.cToken)
    console.log(this.cToken);
  };

  

 

    public onSubmit() {
      console.log(this.fg.value);
      this.isLoading = true;
      this.ResetemailService.resetemail(this.fg.value).subscribe(
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


