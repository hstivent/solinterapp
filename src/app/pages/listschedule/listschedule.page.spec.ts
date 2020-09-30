import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListschedulePage } from './listschedule.page';

describe('ListschedulePage', () => {
  let component: ListschedulePage;
  let fixture: ComponentFixture<ListschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListschedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
