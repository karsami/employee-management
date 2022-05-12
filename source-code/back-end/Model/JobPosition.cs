using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class JobPosition
    {
        public int JobPositionID { get; set; }
        public string JobPositionCode { get; set; }
        public string JobPositionName { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public string Description { get; set; }
    }
}
