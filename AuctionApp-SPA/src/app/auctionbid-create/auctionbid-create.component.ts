import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuctionBidService } from '../_services/auction-bid.service';

@Component({
  selector: 'app-auctionbid-create',
  templateUrl: './auctionbid-create.component.html',
  styleUrls: ['./auctionbid-create.component.css']
})
export class AuctionbidCreateComponent implements OnInit {
  model: any = {};

  constructor(private auctionBidService: AuctionBidService, private alertify: AlertifyService, private authService: AuthService,
      private route: ActivatedRoute) { }

  ngOnInit() {
  }

  create() {
    this.auctionBidService.createAuctionBid(this.model, this.authService.decodedToken.nameid,
      +this.route.snapshot.params['id']).subscribe(() => {
        location.reload();
        this.alertify.success('Lance realizado com sucesso');
    }, error => {
      this.alertify.error(error);
    });
  }

}
