import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(
    public timeService: TimeService
  ) {
  }

  ngOnInit() {
  }


}
