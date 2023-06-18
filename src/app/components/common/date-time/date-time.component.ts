import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent {
  currentDate: Date;

  constructor() {
    setInterval(()=>{
      this.currentDate = new Date();
    }, 1000);
  }
}
