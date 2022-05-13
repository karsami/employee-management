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
    public class ContractBL : BaseBL<Contract>, IContractBL
    {
        public ContractBL(IBaseDA baseDA) : base(baseDA)
        {

        }
    }
}
