import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceorderPage } from './serviceorder.page';

describe('ServiceorderPage', () => {
  let component: ServiceorderPage;
  let fixture: ComponentFixture<ServiceorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
