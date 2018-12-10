import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuctionService } from '../_services/auction.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-create',
  templateUrl: './auction-create.component.html',
  styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private auctionService: AuctionService, private alertify: AlertifyService, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.auctionService.createAuction(this.model, this.authService.decodedToken.nameid).subscribe(() => {
      this.alertify.success('Cadastro realizado com sucesso');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.router.navigate(['/auctions']);
  }

}
