import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  totalBookingsCount:number = 0;
  constructor(private shared:SharedService){

  }

   ngOnInit(){
    console.log("Header Component");

    this.shared.bookingCntObs$.subscribe((data:any)=>{
      console.log("Data Received",data);
      this.totalBookingsCount = data;
    })

   }
}
