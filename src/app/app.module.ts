import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDatabaseService } from './core/services/in-memory-database.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './core/components/header/header/header.component';
import { SideNavComponent } from './core/components/side-nav/side-nav/side-nav.component';
import { SidenavService } from './core/services/sidenav.service';
import { MoviesModule } from './features/movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent
  ],
  exports: [
    MoviesModule,
    UserModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDatabaseService),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
