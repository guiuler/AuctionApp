using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;

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

    }
}