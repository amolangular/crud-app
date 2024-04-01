import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  bookingCntSub$ = new Subject();
  bookingCntObs$:Observable<any> = this.bookingCntSub$.asObservable();
 // bookingCntSub$ = new BehaviorSubject<number>(10);

  sendBookingCount(count:number){
    this.bookingCntSub$.next(count);
  }
}
