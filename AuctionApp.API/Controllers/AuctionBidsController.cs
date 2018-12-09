using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuctionApp.API.Data;
using AuctionApp.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionBidsController : ControllerBase
    {
        private readonly IAuctionRepository _repo;
        private readonly IMapper _mapper;
        public AuctionBidsController(IAuctionRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        // GET api/auctionbids
        [HttpGet]
        public async Task<IActionResult> GetAuctionBids()
        {
            var auctionBids = await _repo.GetAuctionBids();

            var auctionBidsToReturn = _mapper.Map<IEnumerable<AuctionBidForListDto>>(auctionBids);

            return Ok(auctionBidsToReturn);
        }

        // GET api/auctionbids/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuctionBid(int id)
        {
            var auctionBid = await _repo.GetAuctionBid(id);

            var auctionToReturn = _mapper.Map<AuctionBidForDetailedDto>(auctionBid);

            return Ok(auctionToReturn);
        }
    }
}