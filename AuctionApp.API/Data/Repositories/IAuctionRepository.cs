using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;

namespace AuctionApp.API.Data
{
    public interface IAuctionRepository
    {
        Task<IEnumerable<Auction>> GetAuctions();
        Task<Auction> GetAuction(int id);
        Task<Auction> InsertAuction(Auction auction);

        Task<Auction> DeleteAuction (Auction auction);
    }
}