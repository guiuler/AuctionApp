using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuctionApp.API.Data;
using AuctionApp.API.Dtos;
using AuctionApp.API.Helpers;
using AuctionApp.API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AuctionApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionBidsController : ControllerBase
    {
        private readonly IAuctionBidRepository _auctionBidRepo;
        private readonly IUserRepository _userRepo;
        private readonly IAuctionRepository _auctionRepo;
        private readonly IAuctionBidHelper _auctionBidHelper;
        private readonly IMapper _mapper;
        public AuctionBidsController(IAuctionBidRepository auctionBidRepo, 
                                     IUserRepository userRepo, 
                                     IAuctionRepository auctionRepo,
                                     IAuctionBidHelper auctionBidHelper, 
                                     IMapper mapper)
        {
            _mapper = mapper;
            _auctionBidRepo = auctionBidRepo;
            _userRepo = userRepo;
            _auctionRepo = auctionRepo;
            _auctionBidHelper = auctionBidHelper;
        }

        // GET api/auctionbids
        [HttpGet]
        public async Task<IActionResult> GetAuctionBids()
        {
            var auctionBids = await _auctionBidRepo.GetAuctionBids();

            var auctionBidsToReturn = _mapper.Map<IEnumerable<AuctionBidForListDto>>(auctionBids);

            return Ok(auctionBidsToReturn);
        }

        // GET api/auctionbids/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAuctionBid(int id)
        {
            var auctionBid = await _auctionBidRepo.GetAuctionBid(id);

            var auctionToReturn = _mapper.Map<AuctionBidForDetailedDto>(auctionBid);

            return Ok(auctionToReturn);
        }

        [HttpPost]
        public async Task<IActionResult> AddAuctionBid(AuctionBidForInsertDto auctionBidForInsertDto)
        {
            var userFromRepo = await _userRepo.GetUser(auctionBidForInsertDto.UserId);
            var auctionFromRepo = await _auctionRepo.GetAuction(auctionBidForInsertDto.AuctionId);                                        
            var auctionBid = _mapper.Map<AuctionBid>(auctionBidForInsertDto);

            if (!_auctionBidHelper.CheckIfBidIsGreaterThanCurrentAuctionBid(auctionFromRepo, auctionBid))
            {
                return Unauthorized("Não pode realizar lances menores que o lance atual");
            }
            
            auctionBid.User = userFromRepo;
            auctionBid.Auction = auctionFromRepo;
            auctionBid.DateOfBid = DateTime.Now;

            if (!_auctionBidHelper.CheckIfAuctionCanReceiveAuctioBid(auctionFromRepo, auctionBid))
            {
                return Unauthorized("Não é possível realizar lances em leilões encerrados");
            }
                
            var createdAuctionBid = await _auctionBidRepo.InsertAuctionBid(auctionBid);

            return Ok(createdAuctionBid);
        }
    }
}