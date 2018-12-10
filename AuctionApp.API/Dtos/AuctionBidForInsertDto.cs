using System;

namespace AuctionApp.API.Dtos
{
    public class AuctionBidForInsertDto
    {
        // PK
        public int Id { get; set; }

        // Valor do lance
        public double Value { get; set; }

        // Data do lance
        public DateTime DateOfBid { get; set; }

        public int AuctionId { get; set; }

        public int UserId { get; set; }  
    }
}