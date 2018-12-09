import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../_models/auction';
import { AuctionService } from '../_services/auction.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  auctions: Auction[];

  constructor(private auctionService: AuctionService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.loadAuctions();
  }

  loadAuctions() {
    this.auctionService.getAuctions().subscribe((auctions: Auction[]) => {
      this.auctions = auctions;
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
