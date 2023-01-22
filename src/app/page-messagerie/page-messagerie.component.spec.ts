import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMessagerieComponent } from './page-messagerie.component';

describe('PageMessagerieComponent', () => {
  let component: PageMessagerieComponent;
  let fixture: ComponentFixture<PageMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
