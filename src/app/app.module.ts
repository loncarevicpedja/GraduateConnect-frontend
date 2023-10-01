import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { KorisniciListComponent } from './features/korisnici/korisnici-list/korisnici-list.component';
import { KreirajKorisnikaComponent } from './features/korisnici/kreiraj-korisnika/kreiraj-korisnika.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KorisniciListComponent,
    KreirajKorisnikaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
