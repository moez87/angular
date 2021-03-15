import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToDOComponent } from './update-to-do.component';

describe('UpdateToDOComponent', () => {
  let component: UpdateToDOComponent;
  let fixture: ComponentFixture<UpdateToDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateToDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
