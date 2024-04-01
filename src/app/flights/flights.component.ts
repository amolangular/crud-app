import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {
  count: number = 0;
  constructor(private shared: SharedService) {

  }
  ngOnInit() {

  }

  addBooking() {
    this.count++;
    this.shared.sendBookingCount(this.count);
  }
}
