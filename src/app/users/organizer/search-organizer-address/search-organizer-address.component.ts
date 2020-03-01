import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-organizer-address',
  templateUrl: './search-organizer-address.component.html',
  styleUrls: ['./search-organizer-address.component.scss']
})
export class SearchOrganizerAddressComponent implements OnInit {

  public isLoading = false;
  public Organizer_ID: FormControl
  public searchedOrganizersAddress = [];

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.Organizer_ID = new FormControl();
  }

  public onSearch() {
    this.isLoading = true;
    this.searchedOrganizersAddress = [];
    this.organizerService.searchOrganizeraddress(this.Organizer_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.searchedOrganizersAddress = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}


