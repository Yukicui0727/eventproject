import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizerService } from 'src/app/shared/services/organizer.service';

@Component({
  selector: 'app-update-organizer-address',
  templateUrl: './update-organizer-address.component.html',
  styleUrls: ['./update-organizer-address.component.scss']
})
export class UpdateOrganizerAddressComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Address_id:new FormControl(),
      Street1: new FormControl(),
      Street2: new FormControl(),
      City: new FormControl(),
      State: new FormControl(),
      Zipcode: new FormControl(),
      Other_Details: new FormControl(),
      Organizer_ID: new FormControl(),
    });
  }

  public onUpdate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.organizerService.updateOrganizeraddress(this.fg.value).subscribe(
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


