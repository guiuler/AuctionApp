import { Component, OnInit, Input } from '@angular/core';
import { Auction } from 'src/app/_models/auction';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {
  @Input() auction: Auction;
  constructor() { }

  ngOnInit() {
  }

}
