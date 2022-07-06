import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SidenavService } from 'src/app/core/services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  @ViewChild('sidenav')
  public sidenav!: MatSidenav;
  @Input() sidenavLayout:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches), shareReplay());

  constructor(private breakpointObserver: BreakpointObserver, private sidenavService: SidenavService) { }

  ngOnInit(): void {
		this.sidenavService.setSidenav(this.sidenav);
    console.log('side-nav ', this.sidenavService);
	}
}
