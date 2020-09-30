import { TestBed } from '@angular/core/testing';

import { SchedulesvisitsService } from './schedulesvisits.service';

describe('SchedulesvisitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchedulesvisitsService = TestBed.get(SchedulesvisitsService);
    expect(service).toBeTruthy();
  });
});
