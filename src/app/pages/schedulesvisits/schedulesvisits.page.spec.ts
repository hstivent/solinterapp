import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesvisitsPage } from './schedulesvisits.page';

describe('SchedulesvisitsPage', () => {
  let component: SchedulesvisitsPage;
  let fixture: ComponentFixture<SchedulesvisitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesvisitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesvisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
