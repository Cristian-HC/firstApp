import { TestBed } from '@angular/core/testing';

import { NetflixCatalogoService } from './netflix-catalogo.service';

describe('NetflixCatalogoService', () => {
  let service: NetflixCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetflixCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
