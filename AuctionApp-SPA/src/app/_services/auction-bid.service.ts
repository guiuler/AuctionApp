import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuctionBid } from '../_models/auctionBid';

@Injectable({
  providedIn: 'root'
})
export class AuctionBidService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAuctionBids(): Observable<AuctionBid[]> {
    return this.http.get<AuctionBid[]>(this.baseUrl + 'auctionbids');
  }

  getAuctionBid(id): Observable<AuctionBid> {
    return this.http.get<AuctionBid>(this.baseUrl + 'auctionbids/' + id);
  }

}
