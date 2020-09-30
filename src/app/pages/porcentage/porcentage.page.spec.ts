import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentagePage } from './porcentage.page';

describe('PorcentagePage', () => {
  let component: PorcentagePage;
  let fixture: ComponentFixture<PorcentagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
