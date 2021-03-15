import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToDOComponent } from './list-to-do.component';

describe('ListToDOComponent', () => {
  let component: ListToDOComponent;
  let fixture: ComponentFixture<ListToDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListToDOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
