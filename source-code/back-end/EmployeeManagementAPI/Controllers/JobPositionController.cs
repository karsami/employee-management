using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace EmployeeManagementAPI.Controllers
{
    public class JobPositionController : BaseController<JobPosition>
    {
        public JobPositionController(IJobPositionBL jobPositionBL) : base(jobPositionBL)
        {
        }
    }
}
