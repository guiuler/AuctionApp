import { AuctionBid } from './auctionBid';
import { Auction } from './auction';

export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    cpf: string;
    isAdministrator: boolean;
    isActive: boolean;
    auctions: Auction[];
    auctionBids: AuctionBid[];
}
