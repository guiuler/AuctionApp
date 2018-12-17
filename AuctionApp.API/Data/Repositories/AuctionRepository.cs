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

        public async Task<Auction> InsertAuction(Auction auction)
        {  
            await _context.Auctions.AddAsync(auction);
            await _context.SaveChangesAsync();

            return auction;
        }
        
        public async Task<Auction> DeleteAuction (Auction auction)
        {
            _context.Auctions.Remove(auction);
            await _context.SaveChangesAsync();

            return auction;
        }       
    }
}