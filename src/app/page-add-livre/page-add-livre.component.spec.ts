import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddLivreComponent } from './page-add-livre.component';

describe('PageAddLivreComponent', () => {
  let component: PageAddLivreComponent;
  let fixture: ComponentFixture<PageAddLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
