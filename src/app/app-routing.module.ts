import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './components/admin/add-profile/add-profile.component';
import { EditProfileComponent } from './components/admin/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/admin/view-profile/view-profile.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path: "dashboard", component: AdminDashboardComponent},
  {path: "profiles/create", component: AddProfileComponent},
  {path: "profiles/view", component: ViewProfileComponent},
  {path: "profiles/edit", component: EditProfileComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
