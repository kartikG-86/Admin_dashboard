import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent, MatMenuModule, MatButtonModule, NavbarComponent, LoginComponent, SidebarComponent, InstanceComponent, CloudUserComponent, ResellerComponent, AddResellerComponent, NgxColorsModule, AddLabelComponent, ManageLabelComponent, ServerComponent, TableComponent, ServerModalComponent, TallyReleaseComponent, TallyReleaseModalComponent,SubscriptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-dashboard';
}
