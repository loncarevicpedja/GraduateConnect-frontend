import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajKorisnikaComponent } from './kreiraj-korisnika.component';

describe('KreirajKorisnikaComponent', () => {
  let component: KreirajKorisnikaComponent;
  let fixture: ComponentFixture<KreirajKorisnikaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KreirajKorisnikaComponent]
    });
    fixture = TestBed.createComponent(KreirajKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
