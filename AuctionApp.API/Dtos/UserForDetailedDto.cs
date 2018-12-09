using System.Collections.Generic;
using AuctionApp.API.Models;

namespace AuctionApp.API.Dtos
{
    public class UserForDetailedDto
    {
        // PK
        public int Id { get; set; }

        // Nome do usuário
        public string Name { get; set; }

        // Email
        public string Email { get; set; }

        // Usuário
        public string Username { get; set; }

        // Cpf
        public string Cpf { get; set; }

        // Verifica se o usuário é administrador
        public bool IsAdministrator { get; set; }

        // Verifica se o usuário não foi excluído
        public bool IsActive { get; set; }

        // Lista de leilões cadastrados pelo usuário
        public ICollection<AuctionForListDto> Auctions { get; set; }

        // Lista de lances cadastrados pelo usuário
        public ICollection<AuctionBidForListDto> AuctionBids { get; set; }
    }
}