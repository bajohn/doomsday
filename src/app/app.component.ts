import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { ActivePageService } from './services/active-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questionIcon = faQuestionCircle;
  clockIcon = faClock;

  constructor(
    public timeService: TimeService,
    public pageService: ActivePageService
  ) {
  }


  ngOnInit(): void {
  }

}
