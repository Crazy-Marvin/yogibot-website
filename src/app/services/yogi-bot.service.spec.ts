import { TestBed, inject } from '@angular/core/testing';

import { YogiBotService } from './yogi-bot.service';

describe('YogiBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YogiBotService]
    });
  });

  it('should be created', inject([YogiBotService], (service: YogiBotService) => {
    expect(service).toBeTruthy();
  }));
});
