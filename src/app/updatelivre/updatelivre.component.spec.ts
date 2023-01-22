import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelivreComponent } from './updatelivre.component';

describe('UpdatelivreComponent', () => {
  let component: UpdatelivreComponent;
  let fixture: ComponentFixture<UpdatelivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
