import { TestBed } from '@angular/core/testing';

import { TipocontratoService } from './tipocontrato.service';

describe('TipocontratoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipocontratoService = TestBed.get(TipocontratoService);
    expect(service).toBeTruthy();
  });
});
