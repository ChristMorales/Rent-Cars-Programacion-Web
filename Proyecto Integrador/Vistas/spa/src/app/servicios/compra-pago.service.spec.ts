import { TestBed } from '@angular/core/testing';

import { CompraPagoService } from './compra-pago.service';

describe('CompraPagoService', () => {
  let service: CompraPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
