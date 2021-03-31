import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduct2Component } from './update-product2.component';

describe('UpdateProduct2Component', () => {
  let component: UpdateProduct2Component;
  let fixture: ComponentFixture<UpdateProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProduct2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
