import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuctionService } from '../_services/auction.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private auctionService: AuctionService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  create() {
    this.auctionService.createAuction(this.model).subscribe(() => {
      this.alertify.success('Cadastro realizado com sucesso');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
