using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{
    public class RoleController : BaseController<Role>
    {
        public RoleController(IRoleBL roleBl) : base(roleBl)
        {
        }
    }
}
