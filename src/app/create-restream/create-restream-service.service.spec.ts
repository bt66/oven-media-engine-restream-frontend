import { TestBed } from '@angular/core/testing';

import { CreateRestreamServiceService } from './create-restream-service.service';

describe('CreateRestreamServiceService', () => {
  let service: CreateRestreamServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRestreamServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
