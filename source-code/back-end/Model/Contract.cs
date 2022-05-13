using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model
{
    [Table("contracts")]  
   public class Contract
    {
        [Key]
        public int ContractID { get; set; }
        public string ContractNo { get; set; }
        public string ContractName { get; set; }
        public int UserID { get; set; }
        public string FullName { get; set; }
        public int OrganizationUnitID { get; set; }
        public string OrganizationUnitName { get; set; }
        public int ContractPeriodID { get; set; }
        public string ContractPeriodName { get; set; }
        public int ContractTypeID { get; set; }
        public string ContractTypeName { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public double? BasicSalary { get; set; }
        public double? InsuranceSalary { get; set; }
        public int StatusID { get; set; }
        public string StatusName { get; set; }
    }
}
