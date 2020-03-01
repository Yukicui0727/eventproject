import { Component, OnInit } from '@angular/core';
import { SeatService } from '../shared/services/seat.service';
import { SeatTable } from '../shared/models/seat.interface';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {

  public tableData: SeatTable;

  constructor(
    private seatService: SeatService
  ) { }

  ngOnInit(): void {
    this.seatService.getSeatTable().subscribe(res => {
      this.tableData = res;
    });
  }

}
