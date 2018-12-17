using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Data
{
    public class AuctionBidRepository : IAuctionBidRepository
    {
        private readonly DataContext _context;
        public AuctionBidRepository(DataContext context)
        {
            _context = context;
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

        public async Task<AuctionBid> InsertAuctionBid(AuctionBid auctionBid)
        {  
            await _context.AuctionBids.AddAsync(auctionBid);
            await _context.SaveChangesAsync();

            return auctionBid;
        }

    }
}