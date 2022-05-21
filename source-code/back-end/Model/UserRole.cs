using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("user_role")]
    public class UserRole
    {
        [Key]
        public int UserRoleID { get; set; }
        public int UserID { get; set; }
        public string UserName { get; set; }
        public int RoleID { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
    }
}
