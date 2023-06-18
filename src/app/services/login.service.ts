import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  navItems = {
    admin: [
      {title: "Dashboard", routerLink: "/dashboard", icon: "dashboard"},
      {title: "Create Profile", routerLink: "/profiles/create", icon: "arrow_forward"},
      {title: "View Profile", routerLink: "/profiles/view", icon: "account_circle"},
      {title: "Edit Profile", routerLink: "/profiles/edit", icon: "create"},

      {title: "Attendance", routerLink: "/attendance", icon: "keyboard_backspace"},
      {title: "Apply Leave", routerLink: "/employees/applyLeave", icon: "local_hospital"},
      {title: "View Employees", routerLink: "/employees/viewProfiles", icon: "supervised_user_circle"},
      {title: "Salary Calculation", routerLink: "/employees/viewProfiles", icon: "money"},
      {title: "Leave Requests", routerLink: "/employees/leavRequests", icon: "work_off"}],
    user: [
      {title: "Dashboard", routerLink: "/dashboard", icon: "test icon"},
      {title: "Attendance", routerLink: "/dashboard", icon: "test icon"},
      {title: "View Profile", routerLink: "/employees/viewProfile", icon: "test icon"},
      {title: "Edit Profile", routerLink: "/employees/editProfile", icon: "test icon"},
      {title: "Apply Leave", routerLink: "/employees/applyLeave", icon: "test icon"},
      {title: "Logout", routerLink: "/employees/viewProfiles", icon: "test icon"}]
  };

  constructor() { }
}
