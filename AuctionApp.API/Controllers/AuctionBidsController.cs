using System.Linq;
using System.Threading.Tasks;
using AuctionApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionBidsController : ControllerBase
    {
        private readonly DataContext _context;
        public AuctionBidsController(DataContext context)
        {
            _context = context;
        }

        // GET api/auctionbids
        [HttpGet]
        public async Task<IActionResult> GetAuctionBids()
        {
            var auctionBids = await _context.AuctionBids.ToListAsync();

            return Ok(auctionBids);
        }

        // GET api/auctionbids/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuctionBid(int id)
        {
            var auctionBid = await _context.AuctionBids.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(auctionBid);
        }
    }
}