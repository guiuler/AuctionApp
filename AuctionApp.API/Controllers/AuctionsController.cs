using System.Linq;
using System.Threading.Tasks;
using AuctionApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionsController : ControllerBase
    {
        private readonly DataContext _context;
        public AuctionsController(DataContext context)
        {
            _context = context;
        }

        // GET api/auctions
        [HttpGet]
        public async Task<IActionResult> GetAuctions()
        {
            var auctions = await _context.Auctions.ToListAsync();

            return Ok(auctions);
        }

        // GET api/auctions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuction(int id)
        {
            var auction = await _context.Auctions.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(auction);
        }
    }
}