using System.Linq;
using System.Threading.Tasks;
using AuctionApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuctionApp.API.Helpers
{
    public class AuctionBidHelper : IAuctionBidHelper
    {
        public bool CheckIfBidIsGreaterThanCurrentAuctionBid (Auction auction, AuctionBid auctionBid)
        {
            var maxBid = 0.00;
            if (auction.AuctionBids?.Count > 0){
                maxBid = auction.AuctionBids.Max(x => x.Value);
            }
            else{
                maxBid = auction.InitialValue;
            }
            
            if(maxBid >= auctionBid.Value)
                return false;

            return true;
        }

        public bool CheckIfAuctionCanReceiveAuctioBid(Auction auction, AuctionBid auctionBid)
        {
            return auctionBid.DateOfBid <= auction.FinalDate;
        }
    }
}