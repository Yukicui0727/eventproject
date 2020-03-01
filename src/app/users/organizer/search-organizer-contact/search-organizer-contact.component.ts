import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-organizer-contact',
  templateUrl: './search-organizer-contact.component.html',
  styleUrls: ['./search-organizer-contact.component.scss']
})
export class SearchOrganizerContactComponent implements OnInit {

  public isLoading = false;
  public Organizer_ID: FormControl
  public searchedOrganizersContact = [];

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.Organizer_ID = new FormControl();
  }

  public onSearch() {
    this.isLoading = true;
    this.searchedOrganizersContact = [];
    this.organizerService.searchOrganizercontact(this.Organizer_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.searchedOrganizersContact = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}



