import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InstanceComponent } from './components/instance/instance.component';
import { CloudUserComponent } from './components/cloud-user/cloud-user.component';
import { ResellerComponent } from './components/reseller/reseller.component';
import { AddResellerComponent } from './components/add-reseller/add-reseller.component';
import { NgxColorsModule } from 'ngx-colors';
import { AddLabelComponent } from './components/add-label/add-label.component';
import { ManageLabelComponent } from './components/manage-label/manage-label.component';
import { ServerComponent } from './components/server/server.component';
import { TableComponent } from './components/table/table.component';
import { ServerModalComponent } from './components/server-modal/server-modal.component';
import { TallyReleaseComponent } from './components/tally-release/tally-release.component';
import { TallyReleaseModalComponent } from './components/tally-release-modal/tally-release-modal.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, MatMenuModule, MatButtonModule, NavbarComponent, LoginComponent, SidebarComponent, InstanceComponent, CloudUserComponent, ResellerComponent, AddResellerComponent, NgxColorsModule, AddLabelComponent, ManageLabelComponent, ServerComponent, TableComponent, ServerModalComponent, TallyReleaseComponent, TallyReleaseModalComponent, SubscriptionsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-dashboard';
  currentTheme: any
  constructor(public router: Router) {
    if (localStorage.getItem('darkMode')) {
      let theme = localStorage.getItem('darkMode')
      this.currentTheme = theme ? JSON.parse(theme) : false
    }
    else {
      this.currentTheme = false
    }
  }

  changeMode(event: any) {
    this.currentTheme = event
  }


}
