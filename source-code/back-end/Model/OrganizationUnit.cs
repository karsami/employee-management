using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model
{
    [Table("organizationunits")]
    public class OrganizationUnit
    {
        [Key]
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public string OrganizationUnitCode { get; set; }
        public string OrgCode { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public int ParentID { get; set; }
    }
}
