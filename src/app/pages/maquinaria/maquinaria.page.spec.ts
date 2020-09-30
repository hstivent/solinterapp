import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaPage } from './maquinaria.page';

describe('MaquinariaPage', () => {
  let component: MaquinariaPage;
  let fixture: ComponentFixture<MaquinariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinariaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
