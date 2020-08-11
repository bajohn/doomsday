import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  electionDate = new Date('2020-11-04T00:00:00');
  secondsPerDay = 10; // display seconds to real days
  clockSeconds = this.curClockSeconds(); //12 * 60 * 60 - 15 * 60; // second of day on clock

  constructor() {
  }
  ngOnInit() {
    setInterval(() => {
      this.clockSeconds = this.curClockSeconds();
    }, 1000);
  }

  minuteHandRotation() {
    return `rotate(${this.minuteHandAngle()} 80 80 )`;
  }


  hourHandRotation() {
    return `rotate(${this.hourHandAngle()} 80 80 )`;
  }

  clockMinute() {
    const minute = Math.floor(this.clockSeconds / 60) % 60;
    if (Math.abs(minute) < 10) {
      return `0${minute}`;
    } else {
      return minute;
    }
  }

  clockHour() {
    return Math.floor((this.clockSeconds / 60 / 60) % 12);
  }

  curClockSeconds() {
    const curSeconds = (new Date()).getTime() / 1000;
    const electionSeconds = this.electionDate.getTime() / 1000;
    const daysLeft = (electionSeconds - curSeconds) / (24 * 3600);
    console.log(daysLeft);
    const secondsFromMidnight = daysLeft * this.secondsPerDay;
    console.log(secondsFromMidnight);
    const midnightSeconds = 12 * 3600;
    const ret = midnightSeconds - secondsFromMidnight;
    console.log(ret);
    return ret;
  }

  private hourHandAngle() {
    return 360 / 12 / 60 * this.clockSeconds / 60;
  }

  private minuteHandAngle() {
    return 360 / 60 * this.clockSeconds / 60;
  }

}
