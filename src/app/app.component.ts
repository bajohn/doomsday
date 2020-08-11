import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doomsday';
  second = 12 * 60 * 60 - 15 * 60; // second of day
  constructor() {
  }
  ngOnInit() {
    setInterval(() => {
      this.second += 1;
    }, 1)
  }

  minuteHandRotation() {
    return `rotate(${this.minuteHandAngle()} 80 80 )`;
  }


  hourHandRotation() {
    return `rotate(${this.hourHandAngle()} 80 80 )`;
  }

  clockMinute() {
    const minute = Math.round(this.second / 60) % 60;
    if (minute < 10) {
      return `0${minute}`;
    } else {
      return minute;
    }
  }

  clockHour() {
    return Math.floor((this.second / 60) / 60) % 12;
  }

  private hourHandAngle() {
    return 360 / 12 / 60 * this.second / 60;
  }

  private minuteHandAngle() {
    return 360 / 60 * this.second / 60;
  }

}
