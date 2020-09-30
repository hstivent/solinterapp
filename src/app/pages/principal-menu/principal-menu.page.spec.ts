import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMenuPage } from './principal-menu.page';

describe('PrincipalMenuPage', () => {
  let component: PrincipalMenuPage;
  let fixture: ComponentFixture<PrincipalMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
