using System.ComponentModel.DataAnnotations;

namespace AuctionApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Sua senha deve ter de 4 a 8 caracteres")]
        public string Password { get; set; }

        [Required]
        public string Cpf { get; set; }

        [Required]
        public bool IsAdministrator { get; set; }

        [Required]
        public bool IsActive { get; set; }      
    }
}