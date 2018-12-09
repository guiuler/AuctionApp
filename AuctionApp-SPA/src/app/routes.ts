import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuctionComponent } from './auction/auction.component';
import { AuctionbidComponent } from './auctionbid/auctionbid.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';

export const appRoutes: Routes = [
    // ORDEM DAS ROTAS É IMPORTANTE
    { path: '', component: HomeComponent},
    // AGRUPAMENTO DE ROTAS QUE PRECISAM SER PROTEGIDAS POR LOGIN
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'auctions', component: AuctionComponent},
            { path: 'auctions/:id', component: AuctionDetailComponent},
            { path: 'auctionbids', component: AuctionbidComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
