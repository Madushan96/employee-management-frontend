import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotificationComponent } from './components/common/notification/notification.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimeComponent } from './components/common/date-time/date-time.component';
import { StatComponent } from './components/common/stat/stat.component';
import { ActionComponent } from './components/common/action/action.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotificationComponent,
    AddEmployeeComponent,
    SideBarComponent,
    DateTimeComponent,
    StatComponent,
    ActionComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
