using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class UserInApp
    {
        public string FullName { get; set; }
        public string UserEmail { get; set; }
        public int UserStatusID { get; set; }
        public string UserStatusName { get; set; }
        public string OrganizationUnitName { get; set; }
        public int OrganizationUnitID { get; set; }
        public int RoleID { get; set; }
        public int UserID { get; set; }
        public string RoleName { get; set; }
    }
}
