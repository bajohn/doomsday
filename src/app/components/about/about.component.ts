import { Component, OnInit } from '@angular/core';
import { ActivePageService } from 'src/app/services/active-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public pageService: ActivePageService
  ) {
    this.pageService.curPage = 'about';
  }

  ngOnInit(): void {
  }

}
