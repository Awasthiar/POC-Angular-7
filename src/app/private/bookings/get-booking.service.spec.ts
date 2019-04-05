import { TestBed } from '@angular/core/testing';

import { GetBookingService } from './get-booking.service';

describe('GetBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBookingService = TestBed.get(GetBookingService);
    expect(service).toBeTruthy();
  });
});
