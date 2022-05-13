using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{
    public class ContractController : BaseController<Contract>
    {
        public ContractController(IBaseBL<Contract> baseBL) : base(baseBL)
        {
        }
    }
}
