import { Component } from '@angular/core';
import { Organizer } from './organizer';
import { OrganizerService } from 'src/app/shared/services/organizer.service';



@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {

  model = new Organizer(1318, 'regal 2', 'regal@gmail.com', 'theater', 'bunny', '12345678', 'regal.com', '188 SW ST', 'Suite 12', 'bellevue', 'WA', '98005');
  
  y = Object.assign({}, this.model); 
  

 display = false;

onSave() { this.display = false; }
Cancel() { this.model=Object.assign({}, this.y);this.display = false; 
  
}

get diagnostic() { return JSON.stringify(this.model); }

}
