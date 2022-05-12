import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 1,
      FirstName: 'Đạt',
      LastName: 'Nguyễn Quốc',
      Prefix: 'Mr.',
      Position: 'Admin',
      Picture: 'images/employees/01.png',
      BirthDate: new Date('2000/10/12'),
      HireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Sinh viên Đại học Công nghiệp Hà Nội',
      Address: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
