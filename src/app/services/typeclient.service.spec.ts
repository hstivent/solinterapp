import { TestBed } from '@angular/core/testing';

import { TypeclientService } from './typeclient.service';

describe('TypeclientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeclientService = TestBed.get(TypeclientService);
    expect(service).toBeTruthy();
  });
});
