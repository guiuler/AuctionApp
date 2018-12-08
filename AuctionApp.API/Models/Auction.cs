using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AuctionApp.API.Models
{
    public class Auction
    {
        // PK
        public int Id { get; set; }

        // Nome do leilão
        public string Name { get; set; }

        // Valor inicial do leilão
        public double InitialValue { get; set; }

        // Produto do leilão é usado ou novo
        public bool IsNew { get; set; }

        // Data de início do leilão
        public DateTime InitialDate { get; set; }

        // Data final do leilão
        public DateTime FinalDate { get; set; }
           
        // Usuário responsável pelo leilão
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }

        public ICollection<AuctionBid> AuctionBids { get; set; }
    }
}