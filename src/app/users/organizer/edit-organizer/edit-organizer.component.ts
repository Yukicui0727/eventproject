import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrganizerService } from 'src/app/shared/services/organizer.service';

@Component({
  selector: 'app-edit-organizer',
  templateUrl: './edit-organizer.component.html',
  styleUrls: ['./edit-organizer.component.scss']
})
export class EditOrganizerComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private organizerService: OrganizerService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_ID: new FormControl(),
      Organizer_Name: new FormControl(),
      Password: new FormControl(),
      Other_Details: new FormControl(),
    });
  }

  public onEdit() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.organizerService.editOrganizer(this.fg.value).subscribe(
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

