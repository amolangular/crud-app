import { Component } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-modules';

 // replaySubject = new AsyncSubject();
 asyncSub = new AsyncSubject();

  ngOnInit() {
    this.asyncSub.subscribe((data: any) => {
      console.log("Async Sub 1", data);
    })

    this.asyncSub.next(10);
    this.asyncSub.next(20);

    this.asyncSub.subscribe((data: any) => {
      console.log("Async Sub 2", data);
    })
    this.asyncSub.next(30);
    this.asyncSub.complete();


  }
}
