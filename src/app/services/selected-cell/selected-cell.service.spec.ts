import { TestBed } from '@angular/core/testing';

import { SelectedCellService } from './selected-cell.service';

describe('SelectedCellService', () => {
  let service: SelectedCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
