using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;

namespace AuctionApp.API.Data
{
    public interface IAuctionBidRepository
    {
         Task<AuctionBid> GetAuctionBid(int id);
         Task<IEnumerable<AuctionBid>> GetAuctionBids();
         Task<AuctionBid> InsertAuctionBid(AuctionBid auctionBid);
    }
}