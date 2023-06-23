import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';

const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "profiles/create", component: CreateEmployeeComponent},
  {path: "profiles/view", component: ViewEmployeeComponent},
  {path: "profiles/edit", component: EditEmployeeComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
