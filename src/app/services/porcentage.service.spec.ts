import { TestBed } from '@angular/core/testing';

import { PorcentageService } from './porcentage.service';

describe('PorcentageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PorcentageService = TestBed.get(PorcentageService);
    expect(service).toBeTruthy();
  });
});
