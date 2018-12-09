import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuctionComponent } from './auction/auction.component';
import { AuctionbidComponent } from './auctionbid/auctionbid.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';

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
            { path: 'auctionbids', component: AuctionbidComponent, canActivate: [AuthGuard]},
            { path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
