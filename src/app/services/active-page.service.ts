import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  curPage: 'home'|'about' = 'home';
  constructor() { }
}
