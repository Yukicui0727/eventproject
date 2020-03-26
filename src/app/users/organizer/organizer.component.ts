import { Component, Input } from '@angular/core';
import { Organizer } from './organizer';
import { OrganizerService } from 'src/app/shared/services/organizer.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";



@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  
  @Input() model:any = {};
  constructor(
    private http: HttpClient,
    private organizerService: OrganizerService,
    private cookieService: CookieService
  ) { }
  
  Organizer_ID = Number(this.cookieService.get("OrganizerID"));

  ngOnInit(){
  //this.model = new Organizer(1311, 'enfecems1@gmail.com', 'regal2', 'theater','bunny', 24, '12345678', 'regal.com', 339, '188 SW ST', 'Suite 12', 'bellevue', 'WA', '98005');
    this.organizerService.searchOrganizer(this.Organizer_ID).subscribe(
      res => {
        if (res.message) {
          alert(res.message);
          return;
        }
        this.model = res;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    );
  }
  //model = new Organizer(1311, 'enfecems1@gmail.com', 'regal2', 'theater','bunny', 24, '12345678', 'regal.com', 339, '188 SW ST', 'Suite 12', 'bellevue', 'WA', '98005');

  
  Copymodel = Object.assign({}, this.model);

  display_personal =true;
  display_basic = true;
  display_contact = true;
  display_address = true;
  display_purchase = true;
  OrganizerService: any;



  private fqdnApp = environment.fqdnApp

 

  onSavepersonal(){
    var options = {
      "email_address": this.model.email_address
    };

  //  var result = this.getOrganizerBasicInfo(1311); 
    this.organizerService.changeOrganizeremail(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }

  onSaveinfo() {
    var options = {
      "organizer_id": this.model.organizer_id,
      "organizer_name": this.model.organizer_name,
      "email_address": this.model.email_address,
      "other_details": this.model.other_details
    };

    this.organizerService.editOrganizer(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }

  onSavecontact() {
    var options = {
      "organizer_id": this.model.organizer_id, 
      "contact_id": this.model.contact_id,
      "contact_name": this.model.contact_name,
      "telephone": this.model.telephone,
      "web_site_address": this.model.web_site_address
    };

    this.organizerService.updateOrganizercontact(options).subscribe(
      res => {
        alert(res.message);
      }
    );
  }


onSaveaddress() {
  var options = {
    "organizer_id": this.model.organizer_id, 
    "address_id": this.model.address_id,
    "street1": this.model.street1,
    "street2": this.model.street2,
    "city": this.model.city,
    "state": this.model.state,
    "zip_code": this.model.zipcode, 
    "other_details": this.model.other_details
  };

  this.organizerService.updateOrganizeraddress(options).subscribe(
    res => {
      alert(res.message);
    }
  );
}

Cancel() {
  this.display_personal = true;  this.display_basic = true; this.display_contact = true; this.display_address = true;
}

get diagnostic() { return JSON.stringify(this.model); }

}

