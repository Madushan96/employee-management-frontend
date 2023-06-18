import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/nav-item.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  navItemList: NavItem[];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
      this.navItemList = this.loginService.navItems.admin;
  }
}
