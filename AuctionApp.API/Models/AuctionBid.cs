using System.ComponentModel.DataAnnotations.Schema;

namespace AuctionApp.API.Models
{
    public class AuctionBid
    {
        // PK
        public int Id { get; set; }

        // Valor do lance
        public double Value { get; set; }
        
        // Leilão ao qual o lance pertence
        [ForeignKey("Auction")]
        public int AuctionId { get; set; }     
        public Auction Auction { get; set; }

        // Usuário que realizou o lance
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}