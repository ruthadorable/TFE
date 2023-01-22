import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookImageDialogComponent } from './show-book-image-dialog.component';

describe('ShowBookImageDialogComponent', () => {
  let component: ShowBookImageDialogComponent;
  let fixture: ComponentFixture<ShowBookImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBookImageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBookImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
