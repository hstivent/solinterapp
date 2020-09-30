import { TestBed } from '@angular/core/testing';
import { PuntoventaService } from './puntoventa.service';


describe('PuntoventaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntoventaService = TestBed.get(PuntoventaService);
    expect(service).toBeTruthy();
  });
});
