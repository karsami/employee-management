import { BaseEntity } from "./base.entity";

export interface Employees extends BaseEntity {
    UserID: number;
    EmployeeCode: string;
    FullName: string;
    Email: string;
    UserEmail: string;
    PhoneNumber: string;
    GenderID: number;
    GenderName: string;
    BirthDay: Date;
    IdentityNumber: number;
    IdentityDate: Date;
    IdentityPlace?: string;
    EthicID: number;
    EthicName: string;
    ReligionID: number;
    ReligionName: string;
    IsUser: boolean;
    Password: string;
    EmployeeStatusID: number;
    UserStatusID: number;
}