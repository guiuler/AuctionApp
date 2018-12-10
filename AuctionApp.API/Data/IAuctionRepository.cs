using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;

namespace AuctionApp.API.Data
{
    public interface IAuctionRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void Update<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<IEnumerable<Auction>> GetAuctions();
        Task<Auction> GetAuction(int id);
        Task<IEnumerable<AuctionBid>> GetAuctionBids();
        Task<AuctionBid> GetAuctionBid(int id);

    }
}