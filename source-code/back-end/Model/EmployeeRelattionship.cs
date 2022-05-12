using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class EmployeeRelattionship
    {
        public int EmployeeRelattionshipID { get; set; }
        public int UserID { get; set; }
        public int RelationshipID { get; set; }
        public string RelationshipName { get; set; }
        public int GenderID { get; set; }
        public string GenderName { get; set; }
        public string FullName { get; set; }
        public DateTime? BirthDay { get; set; }
    }
}
