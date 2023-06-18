import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotificationComponent } from './components/common/notification/notification.component';
import { AddProfileComponent } from './components/admin/add-profile/add-profile.component';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateTimeComponent } from './components/common/date-time/date-time.component';
import { StatComponent } from './components/common/stat/stat.component';
import { ActionComponent } from './components/common/action/action.component';
import { EditProfileComponent } from './components/admin/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/admin/view-profile/view-profile.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotificationComponent,
    AddProfileComponent,
    SideBarComponent,
    DateTimeComponent,
    StatComponent,
    ActionComponent,
    EditProfileComponent,
    ViewProfileComponent,
    PageNotFoundComponent,
    AdminDashboardComponent
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
