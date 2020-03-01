import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizerService } from 'src/app/shared/services/organizer.service';

@Component({
  selector: 'app-add-organizer',
  templateUrl: './add-organizer.component.html',
  styleUrls: ['./add-organizer.component.scss']
})
export class AddOrganizerComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_Name: new FormControl(),
      Email_Address: new FormControl(),
      Password: new FormControl(),
      Other_Details: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.organizerService.createOrganizer(this.fg.value).subscribe(
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
