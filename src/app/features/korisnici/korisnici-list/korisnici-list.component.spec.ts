import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisniciListComponent } from './korisnici-list.component';

describe('KorisniciListComponent', () => {
  let component: KorisniciListComponent;
  let fixture: ComponentFixture<KorisniciListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KorisniciListComponent]
    });
    fixture = TestBed.createComponent(KorisniciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
