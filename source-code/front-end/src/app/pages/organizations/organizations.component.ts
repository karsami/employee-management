import { Component, OnInit } from '@angular/core';
import { organizationUnits } from 'src/app/shared/mock-data/mock-data';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  dataSource: any[] = [];

  constructor() {
    this.dataSource = organizationUnits;
  }

  ngOnInit(): void {
  }

}
