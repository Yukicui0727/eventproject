import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-delete-organizer',
  templateUrl: './delete-organizer.component.html',
  styleUrls: ['./delete-organizer.component.scss']
})
export class DeleteOrganizerComponent implements OnInit {

  public isLoading = false;
  public Organizer_ID: FormControl
  public deletedOrganizers = [];

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.Organizer_ID = new FormControl();
  }

  public onDelete() {
    this.isLoading = true;
    this.deletedOrganizers = [];
    this.organizerService.deleteOrganizer(this.Organizer_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.deletedOrganizers = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}

