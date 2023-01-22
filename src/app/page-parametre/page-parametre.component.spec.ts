import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParametreComponent } from './page-parametre.component';

describe('PageParametreComponent', () => {
  let component: PageParametreComponent;
  let fixture: ComponentFixture<PageParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageParametreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
