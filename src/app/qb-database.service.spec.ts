import { TestBed } from '@angular/core/testing';

import { QbDatabaseService } from './qb-database.service';

describe('QbDatabaseService', () => {
  let service: QbDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QbDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
