using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class OrganizationUnit
    {
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public string OrganizationUnitCode { get; set; }
        public string OrgCode { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }

        public int ParentID { get; set; }
    }
}
