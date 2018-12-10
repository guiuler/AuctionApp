using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AuctionApp.API.Dtos
{
    public class AuctionForInsertDto
    {
        [Required]
        // Nome do leilão
        public string Name { get; set; }
        
        [Required]
        // Valor inicial do leilão
        public double InitialValue { get; set; }

        [Required]
        // Produto do leilão é usado ou novo
        public bool IsNew { get; set; }

        [Required]
        // Data de início do leilão
        public DateTime InitialDate { get; set; }

        [Required]
        // Data final do leilão
        public DateTime FinalDate { get; set; }

        // Lista de lances cadastrados para o leilão
        public int UserId { get; set; }
    }
}