using BLL.Interfaces;
using DAL.Interfaces;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Implement
{
    public class RoleBL : BaseBL<Role>, IRoleBL
    {
        public RoleBL(IBaseDA baseDA) : base(baseDA)
        {
        }
    }
}
