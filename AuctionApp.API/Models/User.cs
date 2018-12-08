using System.Collections.Generic;

namespace AuctionApp.API.Models
{
    public class User
    {
        // PK
        public int Id { get; set; }

        // Nome do usuário
        public string Name { get; set; }

        // Email
        public string Email { get; set; }

        // Usuário
        public string Username { get; set; }

        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        // Cpf
        public string Cpf { get; set; }

        // Verifica se o usuário é administrador
        public bool IsAdministrator { get; set; }

        // Verifica se o usuário não foi excluído
        public bool IsActive { get; set; }

        public ICollection<Auction> Auctions { get; set; }
        public ICollection<AuctionBid> AuctionBids { get; set; }
    }
}