import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-organizer',
  templateUrl: './search-organizer.component.html',
  styleUrls: ['./search-organizer.component.scss']
})
export class SearchOrganizerComponent implements OnInit {

  public isLoading = false;
  public Organizer_ID: FormControl
  public searchedOrganizers = [];

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.Organizer_ID = new FormControl();
  }

  public onSearch() {
    this.isLoading = true;
    this.searchedOrganizers = [];
    this.organizerService.searchOrganizer(Number(this.Organizer_ID.value)).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.searchedOrganizers = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}