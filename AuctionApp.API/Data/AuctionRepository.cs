using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Data
{
    public class AuctionRepository : IAuctionRepository
    {
        private readonly DataContext _context;
        public AuctionRepository(DataContext context)
        {
            _context = context;

        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.Include(p => p.Auctions).Include(p => p.AuctionBids).FirstOrDefaultAsync(u => u.Id == id);
            
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(p => p.Auctions).Include(p => p.AuctionBids).ToListAsync();

            return users;
        }

        public async Task<Auction> GetAuction(int id)
        {
            var auction = await _context.Auctions.Include(p => p.AuctionBids).FirstOrDefaultAsync(u => u.Id == id);
            
            return auction;
        }

        public async Task<IEnumerable<Auction>> GetAuctions()
        {
            var auctions = await _context.Auctions.Include(p => p.AuctionBids).ToListAsync();

            return auctions;
        }

        public async Task<AuctionBid> GetAuctionBid(int id)
        {
            var auctionBid = await _context.AuctionBids.FirstOrDefaultAsync(u => u.Id == id);
            
            return auctionBid;
        }

        public async Task<IEnumerable<AuctionBid>> GetAuctionBids()
        {
            var auctionBids = await _context.AuctionBids.ToListAsync();

            return auctionBids;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}