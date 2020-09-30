import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoPage } from './contrato.page';

describe('ContratoPage', () => {
  let component: ContratoPage;
  let fixture: ComponentFixture<ContratoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
