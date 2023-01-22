import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelivreComponent } from './deletelivre.component';

describe('DeletelivreComponent', () => {
  let component: DeletelivreComponent;
  let fixture: ComponentFixture<DeletelivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
