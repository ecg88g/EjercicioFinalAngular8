import { TestBed } from '@angular/core/testing';

import { ServicioFakeService } from './servicio-fake.service';

describe('ServicioFakeService', () => {
  let service: ServicioFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
