import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoObraPage } from './tipo-obra.page';

describe('TipoObraPage', () => {
  let component: TipoObraPage;
  let fixture: ComponentFixture<TipoObraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoObraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
