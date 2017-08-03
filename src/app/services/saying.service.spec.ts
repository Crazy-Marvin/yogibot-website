import { TestBed, inject } from '@angular/core/testing';

import { SayingService } from './saying.service';

describe('SayingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SayingService]
    });
  });

  it('should be created', inject([SayingService], (service: SayingService) => {
    expect(service).toBeTruthy();
  }));
});
