import { Component } from '@angular/core';
import { Organizer } from './organizer';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {

  

  model = new Organizer(339, 'bunny9','bunny9@gmail.com', 'abc','bunny','12345678','uuu123.com','uoo','111','bellevue','WA','98005');

  submitted = false;

  onSubmit() { this.submitted = true; }
  Cancel() { this.submitted = false; }
 
  get diagnostic() { return JSON.stringify(this.model); }
}
