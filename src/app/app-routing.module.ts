import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {path: '', component: AddEmployeeComponent},
  {path: 'add', component: AddEmployeeComponent},
  {path: 'edit', component: EditEmployeeComponent},
  {path: '**', redirectTo: '/add'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
