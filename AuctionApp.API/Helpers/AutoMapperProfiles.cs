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
            CreateMap<Auction, AuctionForDetailedDto>()
                .ForMember(dest => dest.InChargeName, opt => {
                    opt.MapFrom(src => src.User.Name);
                });
            CreateMap<AuctionBid, AuctionBidForListDto>();
            CreateMap<AuctionBid, AuctionBidForDetailedDto>()
                .ForMember(dest => dest.AuctionName, opt => {
                    opt.MapFrom(src => src.Auction.Name);
                })
                .ForMember(dest => dest.BidUser, opt => {
                    opt.MapFrom(src => src.User.Name);
                });
        }
        
    }
}