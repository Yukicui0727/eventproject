import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/orders.service';

@Component({
  selector: 'app-Create-organizer',
  templateUrl: './createorganizerorder.component.html',
  styleUrls: ['./createorganizerorder.component.scss']
})
export class CreateOrganizerOrderComponent implements OnInit {

  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Organizer_OrderID: new FormControl(),
      Event_ID: new FormControl(),
      Organizer_ID: new FormControl(),
      dateTime: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.orderService.createOrganizerorder(this.fg.value).subscribe(
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

