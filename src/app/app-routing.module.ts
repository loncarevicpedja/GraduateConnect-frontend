import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisniciListComponent } from './features/korisnici/korisnici-list/korisnici-list.component';
import { KreirajKorisnikaComponent } from './features/korisnici/kreiraj-korisnika/kreiraj-korisnika.component';

const routes: Routes = [
  {
    path: 'admin/korisnici',
    component: KorisniciListComponent,
  },
  {
    path: 'admin/korisnici/dodaj',
    component: KreirajKorisnikaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
