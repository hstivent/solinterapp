import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientaPage } from './herramienta.page';

describe('HerramientaPage', () => {
  let component: HerramientaPage;
  let fixture: ComponentFixture<HerramientaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerramientaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramientaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
