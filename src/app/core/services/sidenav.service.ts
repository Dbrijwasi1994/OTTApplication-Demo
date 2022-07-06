import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    console.log('open')
    this.sidenav.opened = true;
    return this.sidenav.open();
  }


  public close() {
    console.log('close')
    this.sidenav.opened = false;
    return this.sidenav.close();
  }

  public toggle() {
    return this.sidenav.toggle();
  }
}
