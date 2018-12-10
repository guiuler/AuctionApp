import { Component, OnInit } from '@angular/core';
import { AuctionBid } from '../_models/auctionBid';
import { AuctionService } from '../_services/auction.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuctionBidService } from '../_services/auction-bid.service';

@Component({
  selector: 'app-auctionbid',
  templateUrl: './auctionbid.component.html',
  styleUrls: ['./auctionbid.component.css']
})
export class AuctionbidComponent implements OnInit {

  auctionBid: AuctionBid[];
  constructor(private auctionBidService: AuctionBidService, private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadAuctionBids();
  }

  loadAuctionBids() {
    this.auctionBidService.getAuctionBids().subscribe((auctionBid: AuctionBid[]) => {
      this.auctionBid = auctionBid;
    }, error => {
      this.alertify.error(error);
    });
  }

  formatDate(date: string): string {
    return (date.split('T')[0].split('-'))[2] + '/' + (date.split('T')[0].split('-'))[1] + '/' + (date.split('T')[0].split('-'))[0] +
    ' ' +  date.split('T')[1];
  }

}
