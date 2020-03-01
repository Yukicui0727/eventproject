import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizerService } from 'src/app/shared/services/organizer.service';

@Component({
  selector: 'app-update-organizer-contact',
  templateUrl: './update-organizer-contact.component.html',
  styleUrls: ['./update-organizer-contact.component.scss']
})
export class UpdateOrganizerContactComponent implements OnInit {


  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_id:new FormControl(),
      Contact_ID: new FormControl(),
      Contact_Name: new FormControl(),
      Telephone: new FormControl(),
      Web_site_Address: new FormControl(),
      Address_ID: new FormControl(),
    });
  }

  public onUpdate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.organizerService.updateOrganizercontact(this.fg.value).subscribe(
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


