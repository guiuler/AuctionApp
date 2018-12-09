using System;

namespace AuctionApp.API.Dtos
{
    public class AuctionBidForDetailedDto
    {
        // PK
        public int Id { get; set; }

        // Valor do lance
        public double Value { get; set; }

        // Data do lance
        public DateTime DateOfBid { get; set; }
        
        // Nome do leilão
        public string AuctionName { get; set; }     

        // Usuário que deu o lance
        public string BidUser { get; set; }
    }
}