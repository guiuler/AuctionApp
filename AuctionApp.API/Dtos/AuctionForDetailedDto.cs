using System;
using System.Collections.Generic;
using AuctionApp.API.Models;

namespace AuctionApp.API.Dtos
{
    public class AuctionForDetailedDto
    {
        // PK
        public int Id { get; set; }

        // Nome do leilão
        public string Name { get; set; }

        // Valor inicial do leilão
        public double InitialValue { get; set; }

        // Produto do leilão é usado ou novo
        public int IsNew { get; set; }

        // Data de início do leilão
        public DateTime InitialDate { get; set; }

        // Data final do leilão
        public DateTime FinalDate { get; set; }

        public int UserId { get; set; }

        // Lista de lances cadastrados para o leilão
        public ICollection<AuctionBidForListDto> AuctionBids { get; set; }
    }
}