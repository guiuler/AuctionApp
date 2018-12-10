import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuctionComponent } from './auction/auction.component';
import { AuctionbidComponent } from './auctionbid/auctionbid.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { AuctionCreateComponent } from './auction-create/auction-create.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

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
            { path: 'auctions/create', component: AuctionCreateComponent},
            { path: 'auctions/:id', component: AuctionDetailComponent},
            { path: 'user/profile', component: UsersEditComponent},
            { path: 'auctionbids', component: AuctionbidComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
