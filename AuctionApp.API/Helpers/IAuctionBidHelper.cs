using AuctionApp.API.Models;

namespace AuctionApp.API.Helpers
{
    public interface IAuctionBidHelper
    {
        bool CheckIfBidIsGreaterThanCurrentAuctionBid (Auction auction, AuctionBid auctionBid);
        bool CheckIfAuctionCanReceiveAuctioBid(Auction auction, AuctionBid auctionBid);
    }
}