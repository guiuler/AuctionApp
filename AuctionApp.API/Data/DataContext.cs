using AuctionApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<User> Users { get; set; }

        public DbSet<Auction> Auctions { get; set; }

        public DbSet<AuctionBid> AuctionBids { get; set; }
    }
}