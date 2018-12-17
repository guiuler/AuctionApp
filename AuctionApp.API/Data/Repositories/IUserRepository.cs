using System.Collections.Generic;
using System.Threading.Tasks;
using AuctionApp.API.Models;

namespace AuctionApp.API.Data
{
    public interface IUserRepository
    {
         Task<User> GetUser(int id);
         Task<IEnumerable<User>> GetUsers();

    }
}