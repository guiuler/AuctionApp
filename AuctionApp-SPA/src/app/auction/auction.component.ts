import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  auctions: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAuctions();
  }

  getAuctions() {
    this.http.get('http://localhost:5000/api/auctions').subscribe(response => {
      this.auctions = response;
    }, error => {
      console.log(error);
    });
  }
}
