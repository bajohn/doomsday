import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  electionDate = new Date('2020-11-04T00:00:00');
  secondsPerDay = 10; // display seconds to real days
  daySeconds = this.updatedDaySeconds(); //12 * 60 * 60 - 15 * 60; // seconds of day on clock

  constructor() {
  }
  ngOnInit() {
    //this.testClock();
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      this.daySeconds = this.updatedDaySeconds();

    }, 1000);
  }

  // Run super fast for debugging
  testClock() {
    setInterval(() => {
      this.daySeconds = this.daySeconds += 1;
    }, 200);
  }

  minuteHandRotation() {
    return `rotate(${this.minuteHandAngle()} 60 60 )`;
  }


  hourHandRotation() {
    return `rotate(${this.hourHandAngle()} 60 60 )`;
  }

  // seconds of a minute
  clockSeconds() {
    const seconds = Math.floor(this.daySeconds % 60);
    return this.prependZero(seconds);

  }

  clockMinute() {
    const minute = Math.floor(this.daySeconds / 60) % 60;
    return this.prependZero(minute);
  }

  clockHour() {
    return Math.floor((this.daySeconds / 60 / 60) % 12);
  }

  remainingTimeText() {
    const midnightSeconds = 12 * 3600;
    const secondsToMidnight = midnightSeconds - this.daySeconds;
    console.log(secondsToMidnight)
    const minutes = Math.ceil(Math.floor(secondsToMidnight / 60) % 60);
    const seconds = Math.ceil(secondsToMidnight - minutes * 60);
    const minutesZeroed = seconds === 60 ? minutes + 1 : minutes;
    const secondsZeroed = seconds === 60 ? 0 : seconds;
    return `${minutesZeroed} minutes and ${secondsZeroed} seconds`;
  }

  private prependZero(val) {
    if (Math.abs(val) < 10) {
      return `0${val}`;
    } else {
      return val;
    }
  }

  private updatedDaySeconds() {
    const curSeconds = (new Date()).getTime() / 1000;
    const electionSeconds = this.electionDate.getTime() / 1000;
    const daysLeft = (electionSeconds - curSeconds) / (24 * 3600);
    const secondsToMidnight = daysLeft * this.secondsPerDay;
    console.log(secondsToMidnight);
    const midnightSeconds = 12 * 3600;
    const ret = midnightSeconds - secondsToMidnight;
    return ret;
  }



  private hourHandAngle() {
    return 360 / 12 / 60 * this.daySeconds / 60;
  }

  private minuteHandAngle() {
    return 360 / 60 * this.daySeconds / 60;
  }

}
