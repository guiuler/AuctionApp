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
    public class AuctionsController : ControllerBase
    {
        private readonly IAuctionRepository _repo;
        private readonly IMapper _mapper;
        public AuctionsController(IAuctionRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        // GET api/auctions
        [HttpGet]
        public async Task<IActionResult> GetAuctions()
        {
            var auctions = await _repo.GetAuctions();

            var auctionsToReturn = _mapper.Map<IEnumerable<AuctionForListDto>>(auctions);

            return Ok(auctionsToReturn);
        }

        // GET api/auctions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuction(int id)
        {
            var auction = await _repo.GetAuction(id);

            var auctionToReturn = _mapper.Map<AuctionForDetailedDto>(auction);

            return Ok(auctionToReturn);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
            _repo.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            
        }
    }
}