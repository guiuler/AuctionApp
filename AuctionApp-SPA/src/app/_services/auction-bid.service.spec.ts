/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuctionBidService } from './auction-bid.service';

describe('Service: AuctionBid', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuctionBidService]
    });
  });

  it('should ...', inject([AuctionBidService], (service: AuctionBidService) => {
    expect(service).toBeTruthy();
  }));
});
