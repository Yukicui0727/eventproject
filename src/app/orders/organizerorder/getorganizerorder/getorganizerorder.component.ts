import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-getorganizerorder',
  templateUrl: './getorganizerorder.component.html',
  styleUrls: ['./getorganizerorder.component.scss']
})
export class GetorganizerorderComponent implements OnInit {

  public isLoading = false;
  public Organizer_Order_ID: FormControl
  public searchedOrganizersorder = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.Organizer_Order_ID = new FormControl();
  }

  public onSearch() {
    this.isLoading = true;
    this.searchedOrganizersorder = [];
    this.orderService.searchOrganizerorder(this.Organizer_Order_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.searchedOrganizersorder = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}

