import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OTTApplication-Demo';
  openMenu = false;
  @Output() sidenavLayoutToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggleSidenav() {
    this.openMenu = !this.openMenu;
    this.sidenavLayoutToggle.emit(this.openMenu);
  }
}
