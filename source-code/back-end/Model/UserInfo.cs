using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class UserInfo
    {
        public int UserID { get; set; }
        public string EmployeeCode { get; set; }
        public string FullName { get; set; }
        public string OrgCode { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public int JobPositionID { get; set; }
        public string JobPositionName { get; set; }
        public string Option { get; set; }
        public string PermissionDetail { get; set; }
    }
}
