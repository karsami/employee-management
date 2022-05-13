using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Model
{
    [Table("users")]
    public class User
    {
        #region Properties
        /// <summary>
        /// ID nhân viên - Khóa chính
        /// </summary>
        [Key]
        public int UserID { get; set; }
        /// <summary>
        /// Mã nhân viên
        /// </summary>
        public string EmployeeCode { get; set; }
        /// <summary>
        /// Địa chỉ Email
        /// </summary>
        public string Email { get; set; }
        /// <summary>
        /// Email tài khoản
        /// </summary>
        public string UserEmail { get; set; }
        /// <summary>
        /// Là người dùng
        /// </summary>
        public bool IsUser { get; set; }
        /// <summary>
        /// Số điện thoại
        /// </summary>
        public string PhoneNumber { get; set; }
        /// <summary>
        /// số cmt
        /// </summary>
        public string IdentityNumber { get; set; }
        /// <summary>
        /// ngày cấp cmt
        /// </summary>
        public DateTime? IdentityDate { get; set; }
        /// <summary>
        /// nơi cấp cmt
        /// </summary>
        public string IdentityPlace { get; set; }
        /// <summary>
        /// dân tộc
        /// </summary>
        public int? EthicID { get; set; }
        /// <summary>
        /// dân tộc
        /// </summary>
        public string EthicName { get; set; }
        /// <summary>
        /// tôn giáo
        /// </summary>
        public int? ReligionID { get; set; }
        /// <summary>
        /// Tôn giáo
        /// </summary>
        public string ReligionName { get; set; }
        /// <summary>
        /// id cơ cấu
        /// </summary>
        public int OrganizationUnitID { get; set; }
        /// <summary>
        /// cơ cấu 
        /// </summary>
        public string OrganizationUnitName { get; set; }
        /// <summary>
        /// vị trí cv
        /// </summary>
        public int JobPositionID { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string JobPositionName { get; set; }
        /// <summary>
        /// Trạng thái nhân viên
        /// </summary>
        public int EmployeeStatusID { get; set; }
        /// <summary>
        /// Trạng thái nhân viên
        /// </summary>
        public string EmployeeStatusName { get; set; }
        /// <summary>
        /// trạng thái tài khoản
        /// </summary>
        public int UserStatusID { get; set; }
        /// <summary>
        /// trạng thái tài khoản
        /// </summary>
        public string UserStatusName { get; set; }
        /// <summary>
        /// tính chất lao động
        /// </summary>
        public int EmployeeNatureID { get; set; }
        /// <summary>
        /// tính chất lao động
        /// </summary>
        public string EmployeeNatureName { get; set; }
        /// <summary>
        /// ngày thửu việc
        /// </summary>
        public DateTime? HireDate { get; set; }
        /// <summary>
        /// ngày chính thưucs
        /// </summary>
        public DateTime? ReceiveDate { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public DateTime? OutDate { get; set; }
        /// <summary>
        /// quê quán
        /// </summary>
        public string CurrentAddress { get; set; }
        /// <summary>
        /// địa chỉ hiện tại
        /// </summary>
        public string NativeAddress { get; set; }
        /// <summary>
        /// lương cơ bản
        /// </summary>
        public double? BasicSalary { get; set; }
        /// <summary>
        /// lương đóng bảo hiểm
        /// </summary>
        public double? InsuranceSalary { get; set; }
        /// <summary>
        /// đã xóa vào thùng rác
        /// </summary>
        public bool IsDeleted { get; set; }
        /// <summary>
        /// ngàytaoj
        /// </summary>
        public DateTime? CreatedDate { get; set; }
        /// <summary>
        /// Họ tên nhân viên
        /// </summary>
        public string FullName { get; set; }
        /// <summary>
        /// Giới tính
        /// </summary>
        public int? GenderID { get; set; }
        /// <summary>
        /// Giới tính
        /// </summary>
        public string GenderName { get; set; }
        /// <summary>
        /// Ngày sinh
        /// </summary>
        public DateTime? BirthDay { get; set; }
        #endregion

    }
}
