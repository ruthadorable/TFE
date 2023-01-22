import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlongationEmpruntComponent } from './prolongation-emprunt.component';

describe('ProlongationEmpruntComponent', () => {
  let component: ProlongationEmpruntComponent;
  let fixture: ComponentFixture<ProlongationEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProlongationEmpruntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlongationEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
