import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Quản lý nhân sự';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
