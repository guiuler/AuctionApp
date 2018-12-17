using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AuctionApp.API.Data;
using AuctionApp.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AuctionApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly IGenericRepository _genericRepo;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepo, IGenericRepository genericRepo, IMapper mapper)
        {
            _mapper = mapper;
            _userRepo = userRepo;
            _genericRepo = genericRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userRepo.GetUsers();

            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userRepo.GetUser(id);

            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            return Ok(userToReturn);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var userFromRepo = await _userRepo.GetUser(id);

            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _genericRepo.SaveAll())
                return NoContent();

            throw new System.Exception($"Falha ao salvar o usuário {id}");
        }
    }
}