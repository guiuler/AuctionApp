using System.Threading.Tasks;

namespace AuctionApp.API.Data
{
    public interface IGenericRepository
    {
         void Add<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         Task<bool> SaveAll();
    }
}