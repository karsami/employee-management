import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxChartModule, DxDataGridModule, DxFormModule, DxSelectBoxModule, DxTreeListModule } from 'devextreme-angular';
import { EmployeesComponent } from './pages/employees/employees.component';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { ReportComponent } from './pages/report/report.component';
import { PositionsComponent } from './pages/positions/positions.component';
import { OrganizationsComponent } from './pages/organizations/organizations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee',
    component: EmployeesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'contract',
    component: ContractsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'report',
    component: ReportComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'setting',
    children: [
      {
        path: 'positions',
        component: PositionsComponent
      },
      {
        path: 'organizations',
        component: OrganizationsComponent
      }

    ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }),
    DxDataGridModule,
    DxFormModule,
    DxChartModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTreeListModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    EmployeesComponent,
    ReportComponent,
    PositionsComponent,
    OrganizationsComponent,
    ContractsComponent
  ]
})
export class AppRoutingModule { }
