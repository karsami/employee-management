using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{
    public class OrganizationUnitController : BaseController<OrganizationUnit>
    {
        public OrganizationUnitController(IOrganizationUnitBL orgBL) : base(orgBL)
        {
        }
    }
}
