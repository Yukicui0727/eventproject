import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deleteorganizerorder',
  templateUrl: './deleteorganizerorder.component.html',
  styleUrls: ['./deleteorganizerorder.component.scss']
})
export class DeleteorganizerorderComponent implements OnInit {


  public isLoading = false;
  public Organizer_Order_ID: FormControl
  public deletedOrganizersorder = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.Organizer_Order_ID = new FormControl();
  }

  public onDelete() {
    this.isLoading = true;
    this.deletedOrganizersorder = [];
    this.orderService.deleteOrganizerorder(this.Organizer_Order_ID.value).subscribe(
      res => {
        this.isLoading = false;
        if (res.message) {
          alert(res.message);
          return;
        }
        this.deletedOrganizersorder = res;
      },
      error => {
        this.isLoading = false;
        alert(JSON.stringify(error.error));
      }
    );
  }

}

