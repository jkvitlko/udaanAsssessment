import { TestBed } from '@angular/core/testing';

import { ExcelOperationsService } from './excel-operations.service';

describe('ExcelOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelOperationsService = TestBed.get(ExcelOperationsService);
    expect(service).toBeTruthy();
  });
});
