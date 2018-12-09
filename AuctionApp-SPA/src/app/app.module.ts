import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuctionbidComponent } from './auctionbid/auctionbid.component';
import { UsersComponent } from './users/users.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { AuctionService } from './_services/auction.service';
import { AuctionCardComponent } from './cards/auction-card/auction-card.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { UserService } from './_services/user.service';
import { DeactivateUserComponent } from './deactivate-user/deactivate-user.component';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      AuctionComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      AuctionbidComponent,
      UsersComponent,
      AuctionCardComponent,
      AuctionDetailComponent,
      DeactivateUserComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      AuctionService,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
