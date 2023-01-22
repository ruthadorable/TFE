import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmpruntComponent } from './page-emprunt.component';

describe('PageEmpruntComponent', () => {
  let component: PageEmpruntComponent;
  let fixture: ComponentFixture<PageEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEmpruntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
