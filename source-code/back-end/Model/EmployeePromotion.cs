using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class EmployeePromotion
    {
        public int EmployeePromotionID { get; set; }
        public int UserID { get; set; }
        public DateTime FromDate { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public int JobPositionID { get; set; }
        public string JobPositionName { get; set; }
        public int EmployeeNatureID { get; set; }
        public string EmployeeNatureName { get; set; }
        public int EmployeeStatusID { get; set; }
        public string EmployeeStatusName { get; set; }
        public string FullName { get; set; }
    }
}
