import { TestBed } from '@angular/core/testing';

import { MokapotService } from './mokapot.service';

describe('MokapotService', () => {
  let service: MokapotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MokapotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
