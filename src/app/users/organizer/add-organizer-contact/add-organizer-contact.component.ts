import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizerService } from 'src/app/shared/services/organizer.service';

@Component({
  selector: 'app-add-organizer-contact',
  templateUrl: './add-organizer-contact.component.html',
  styleUrls: ['./add-organizer-contact.component.scss']
})
export class AddOrganizerContactComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_id: new FormControl(),
      contact_name: new FormControl(),
      telephone: new FormControl(),
      Web_site_address: new FormControl(),
      address_id: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.organizerService.addOrganizercontact(this.fg.value).subscribe(
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

