using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model
{
    [Table("jobpositions")]
    public class JobPosition
    {
        [Key]
        public int JobPositionID { get; set; }
        public string JobPositionCode { get; set; }
        public string JobPositionName { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public string Description { get; set; }
    }
}
