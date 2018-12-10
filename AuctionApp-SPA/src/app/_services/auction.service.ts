import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from '../_models/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getAuctions(): Observable<Auction[]> {
  return this.http.get<Auction[]>(this.baseUrl + 'auctions');
}

getAuction(id): Observable<Auction> {
  return this.http.get<Auction>(this.baseUrl + 'auctions/' + id);
}

createAuction(model: Auction, idUser: number) {
  if (model.isNew) {
    model.isNew = true;
  } else {
    model.isNew = false;
  }
  model.userId = idUser;
  return this.http.post(this.baseUrl + 'auctions', model);
}

deleteAuction(id) {
  return this.http.delete(this.baseUrl + 'auctions/' + id);
}
}
