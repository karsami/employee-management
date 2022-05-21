using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{
    public class UserRoleController : BaseController<UserRole>
    {
        public UserRoleController(IUserRole userRoleBL) : base(userRoleBL)
        {
        }
    }
}
