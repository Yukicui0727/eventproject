import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SeatService } from 'src/app/shared/services/seat.service';

@Component({
  selector: 'app-add-seat',
  templateUrl: './add-seat.component.html',
  styleUrls: ['./add-seat.component.scss']
})
export class AddSeatComponent implements OnInit {


  public fg: FormGroup;
  public isLoading = false;

  constructor(
    private seatService: SeatService
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      Availability: new FormControl(),
      Category_ID: new FormControl(),
      Category_Name: new FormControl(),
      Col_Number: new FormControl(),
      Price: new FormControl(),
      Room_ID: new FormControl(),
      Row_Number: new FormControl(),
      Seat_ID: new FormControl(),
    });
  }

  public onCreate() {
    console.log(this.fg.value);
    this.isLoading = true;
    this.seatService.createSeat(this.fg.value).subscribe(
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
