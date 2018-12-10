using System;
using System.Collections.Generic;

namespace AuctionApp.API.Dtos
{
    public class AuctionForListDto
    {
       // PK
        public int Id { get; set; }

        // Nome do leilão
        public string Name { get; set; }

        // Valor inicial do leilão
        public double InitialValue { get; set; }

        // Data de início do leilão
        public DateTime InitialDate { get; set; }

        // Data final do leilão
        public DateTime FinalDate { get; set; }

        // Produto do leilão é usado ou novo
        public bool IsNew { get; set; }

        public int UserId { get; set; }

        // Lista de lances cadastrados para o leilão
        public ICollection<AuctionBidForListDto> AuctionBids { get; set; }
    }
}