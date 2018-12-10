using AuctionApp.API.Dtos;
using AuctionApp.API.Models;
using AutoMapper;

namespace AuctionApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<Auction, AuctionForListDto>();
            CreateMap<Auction, AuctionForDetailedDto>();
            CreateMap<AuctionForInsertDto, Auction>();
            CreateMap<AuctionBid, AuctionBidForListDto>();
            CreateMap<AuctionBid, AuctionBidForDetailedDto>();
            CreateMap<AuctionBidForInsertDto, AuctionBid>();
            CreateMap<UserForUpdateDto, User>();
        }
        
    }
}