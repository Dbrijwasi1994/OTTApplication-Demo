import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/core/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "OTT Application";
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private sidenav: SidenavService) { }

  toggleSidenav() {
		this.sidenavToggle.emit();
    console.log('Clicked');
	}
}
