import { Component, OnInit } from '@angular/core';
import { Auction } from '../_models/auction';
import { AuctionService } from '../_services/auction.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit {
  auction: Auction;

  constructor(private auctionService: AuctionService, private alertifyService: AlertifyService, private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.loadAuction();
  }

  loadAuction() {
    this.auctionService.getAuction(+this.route.snapshot.params['id']).subscribe((auction: Auction) => {
      this.auction = auction;
    }, error => {
      this.alertifyService.error(error);
    });
  }

  exclude() {
    this.auctionService.deleteAuction(+this.route.snapshot.params['id']);
  }

  formatDate(date: string): string {
    if (date != null) {
      return (date.split('T')[0].split('-'))[2] + '/' + (date.split('T')[0].split('-'))[1] + '/' + (date.split('T')[0].split('-'))[0] +
    ' ' +  date.split('T')[1];
    } else {
      return '';
    }
  }

  formatStatusAuction(status: boolean): string {
    if (status) {
      return 'Novo';
    } else {
      return 'Usado';
    }
  }

}
