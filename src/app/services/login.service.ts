import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  navItems = {
    admin: [
      {title: "Dashboard", routerLink: "/employees/dashboard", icon: "dashboard"},
      {title: "Attendance", routerLink: "/dashboard", icon: "keyboard_backspace"},
      {title: "View Profile", routerLink: "/employees/viewProfile", icon: "account_circle"},
      {title: "Edit Profile", routerLink: "/employees/editProfile", icon: "create"},
      {title: "Apply Leave", routerLink: "/employees/applyLeave", icon: "local_hospital"},
      {title: "Add Employee", routerLink: "/employees/addProfile", icon: "arrow_forward"},
      {title: "View Employees", routerLink: "/employees/viewProfiles", icon: "supervised_user_circle"},
      {title: "Salary Calculation", routerLink: "/employees/viewProfiles", icon: "money"},
      {title: "Leave Requests", routerLink: "/employees/leavRequests", icon: "work_off"},
      {title: "Logout", routerLink: "/employees/viewProfiles", icon: "logout"}],
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
