import { TestBed } from '@angular/core/testing';

import { CotizacionesService } from './cotizaciones.service';

describe('CotizacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CotizacionesService = TestBed.get(CotizacionesService);
    expect(service).toBeTruthy();
  });
});
