using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{

    public class UserController : BaseController<User>
    {
        public UserController(BLL.Interfaces.IBaseBL<User> baseBL) : base(baseBL)
        {
        }
    }
}
