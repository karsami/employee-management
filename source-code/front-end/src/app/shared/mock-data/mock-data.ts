export const employees = [
    {
        EmployeeID: 1,
        FullName: 'Nguyễn Quốc Đạt',
        UserID: '9c089c37-9f36-4d6a-a164-7e7f3af2b349',
        EmployeeCode: 'NV0001',
        BirthDay: '10/12/2000',
        GenderID: 1,
        Email: 'nqdat@example.com',
        Address: 'Cầu Giấy, Hà Nội',
        JobPositionID: 1,
        OrganizationUnitID: 'c38b16e8-05bd-4391-aafc-c091ba28f44c',
        HireDate: '03/25/2021'
    }
]

export const organizationUnits = [
    {
        "OrganizationUnitID": "0217b3a3-902f-4dca-a3c5-86d6cb5a8e9f",
        "OrganizationUnitName": "Văn phòng tổng công ty",
        "ParentID": "00000000-0000-0000-0000-000000000000",
        "Address": "826 Campus Place, Salunga, Pennsylvania, 4458",
        "Description": "Văn phòng tổng công ty"
    },
    {
        "OrganizationUnitID": "f964ea2e-54bc-4b22-a644-8ab10f1077e1",
        "OrganizationUnitName": "Khối sản xuất",
        "ParentID": "0217b3a3-902f-4dca-a3c5-86d6cb5a8e9f",
        "Address": "180 Rutherford Place, Libertytown, Connecticut, 8252",
        "Description": "Bao gồm Trung tâm phát triển phần mềm và Viện Nghiên cứu"
    },
    {
        "OrganizationUnitID": "c38b16e8-05bd-4391-aafc-c091ba28f44c",
        "OrganizationUnitName": "Trung tâm phát triển phần mềm",
        "ParentID": "f964ea2e-54bc-4b22-a644-8ab10f1077e1",
        "Address": "747 Jefferson Avenue, Bloomington, South Carolina, 6064",
        "Description": "Phát triển phần mềm: web app, desktop app"
    },
    {
        "OrganizationUnitID": "e41b1dc2-174d-498f-84c6-80b12ffa475c",
        "OrganizationUnitName": "Viện nghiên cứu và đào tạo",
        "ParentID": "f964ea2e-54bc-4b22-a644-8ab10f1077e1",
        "Address": "230 Carlton Avenue, Hiwasse, Kansas, 531",
        "Description": "Nghiên cứu các công nghệ: AI, Big Data"
    },
    {
        "OrganizationUnitID": "5620d644-8f91-4b96-9fe0-6736894fb42b",
        "OrganizationUnitName": "Phòng nhân sự",
        "ParentID": "0217b3a3-902f-4dca-a3c5-86d6cb5a8e9f",
        "Address": "375 Seigel Court, Jenkinsville, Nevada, 9112"
    }
]

export const positions = [
    {
        JobPositionID: 1,
        JobPositionCode: 'VT0001',
        JobPositionName: 'Lập trình viên',
        OrganizationUnitID: 'c38b16e8-05bd-4391-aafc-c091ba28f44c',
        Description: 'Angular, ASP.NET Core'
    },
    {
        JobPositionID: 2,
        JobPositionCode: 'VT0002',
        JobPositionName: 'HR',
        OrganizationUnitID: '5620d644-8f91-4b96-9fe0-6736894fb42b',
        Description: 'Nhân viên phân tích nghiệp vụ thuộc lĩnh vực Quản trị điều hành doanh ngiệp'
    }
]

export const contracts = [{
    ContractID: 1,
    BasicSalary: "45000000",
    ContracType: 1,
    ContractName: "Hợp đồng thử việc",
    ContractNo: "HĐ0001",
    FromDate: '05/12/2022',
    FullName: "Nguyễn Quốc Đạt",
    InsuranceSalary: "12500000",
    ToDate: '07/12/2022'
}]