import { AuctionBid } from './auctionBid';

export interface Auction {
    id: number;
    name: string;
    initialValue: number;
    isNew: boolean;
    initialDate: Date;
    finalDate: Date;
    bids: AuctionBid[];
}
