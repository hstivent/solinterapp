import { TestBed } from '@angular/core/testing';

import { ServiceorderService } from './serviceorder.service';

describe('ServiceorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceorderService = TestBed.get(ServiceorderService);
    expect(service).toBeTruthy();
  });
});
