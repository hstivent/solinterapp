import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManoObraPage } from './mano-obra.page';

describe('ManoObraPage', () => {
  let component: ManoObraPage;
  let fixture: ComponentFixture<ManoObraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManoObraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManoObraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
