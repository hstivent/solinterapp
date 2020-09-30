import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduModalComponent } from './schedu-modal.component';

describe('ScheduModalComponent', () => {
  let component: ScheduModalComponent;
  let fixture: ComponentFixture<ScheduModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
