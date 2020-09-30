import { TestBed } from '@angular/core/testing';

import { TipoObraService } from './tipo-obra.service';

describe('TipoObraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoObraService = TestBed.get(TipoObraService);
    expect(service).toBeTruthy();
  });
});
