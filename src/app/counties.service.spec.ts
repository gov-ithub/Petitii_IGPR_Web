/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountiesService } from './counties.service';

describe('CountiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountiesService]
    });
  });

  it('should ...', inject([CountiesService], (service: CountiesService) => {
    expect(service).toBeTruthy();
  }));
});
