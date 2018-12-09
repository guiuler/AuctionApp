namespace AuctionApp.API.Dtos
{
    public class UserForListDto
    {
        // PK
        public int Id { get; set; }

        // Usuário
        public string Username { get; set; }

        // Verifica se o usuário é administrador
        public bool IsAdministrator { get; set; }

        // Verifica se o usuário não foi excluído
        public bool IsActive { get; set; }
    }
}