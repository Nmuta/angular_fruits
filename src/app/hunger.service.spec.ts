import { TestBed } from '@angular/core/testing';

import { HungerService } from './hunger.service';

describe('HungerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HungerService = TestBed.get(HungerService);
    expect(service).toBeTruthy();
  });
});
