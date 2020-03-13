import { Component } from '@angular/core';
import { Organizer } from './organizer';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {

  model = new Organizer(1311, 'enfecems1@gmail.com', 'regal2', 'theater','bunny', 24, '12345678', 'regal.com', 339, '188 SW ST', 'Suite 12', 'bellevue', 'WA', '98005');

  Copymodel = Object.assign({}, this.model);

  display_personal =true;
  display_basic = true;
  display_contact = true;
  display_address = true;
  OrganizerService: any;
  constructor(
    private http: HttpClient,
    private organizerService: OrganizerService
  ) { }


  private fqdnApp = environment.fqdnApp

  onSavepersonal(){
    var options = {
      "email_address": this.model.emailaddress
    };

    this.organizerService.changeOrganizeremail(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }

  onSaveinfo() {
    var options = {
      "organizer_id": this.model.id,
      "organizer_name": this.model.organizername,
      "email_address": this.model.emailaddress,
      "other_details": this.model.otherdetails
    };

    this.organizerService.editOrganizer(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }

  onSavecontact() {
    var options = {
      "organizer_id": this.model.id, 
      "contact_id": this.model.contactid,
      "contact_name": this.model.contactname,
      "telephone": this.model.telephone,
      "web_site_address": this.model.websiteaddress
    };

    this.organizerService.updateOrganizercontact(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }


onSaveaddress() {
  var options = {
    "organizer_id": this.model.id, 
    "address_id": this.model.addressid,
    "street1": this.model.street1,
    "street2": this.model.street2,
    "city": this.model.city,
    "state": this.model.state,
    "zip_code": this.model.zipcode, 
    "other_details": this.model.otherdetails
  };

  this.organizerService.updateOrganizeraddress(options).subscribe(
    res => {
      alert(res.message);
    }
  );
}

Cancel() {
  this.model = Object.assign({}, this.Copymodel);this.display_personal = true;  this.display_basic = true; this.display_contact = true; this.display_address = true;
}

get diagnostic() { return JSON.stringify(this.model); }

}
