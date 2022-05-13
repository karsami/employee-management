using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BLL.Interfaces;
using DAL.Interfaces;
using Model;

namespace BLL.Implement
{
    public class OrganizationUnitBL : BaseBL<OrganizationUnit>, IOrganizationUnitBL
    {
        public OrganizationUnitBL(IBaseDA baseDA) : base(baseDA)
        {
        }
    }
}
