import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLivreComponent } from './page-livre.component';

describe('PageLivreComponent', () => {
  let component: PageLivreComponent;
  let fixture: ComponentFixture<PageLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
