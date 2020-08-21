import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questionIcon = faQuestionCircle;
  clockIcon = faClock;

  constructor(
    public timeService: TimeService
  ) {
  }


  ngOnInit(): void {
  }

}
