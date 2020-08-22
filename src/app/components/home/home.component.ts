import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';
import { ActivePageService } from 'src/app/services/active-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(
    public timeService: TimeService,
    public pageService: ActivePageService
  ) {
    this.pageService.curPage = 'home';
  }

  ngOnInit() {
  }


}
