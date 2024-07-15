import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarItems = [
    { _id: 1, name: "Dashboard", icon: "bi bi-grid mx-2", href: '/dashboard' },
    { _id: 2, name: "Instance", icon: "bi bi-person mx-2", href: "/instance" },
    { _id: 3, name: "Cloud User", icon: "bi bi-people mx-2", href: '/cloud_user' },
    { _id: 4, name: "Reseller", icon: "bi bi-tags mx-2", href: '/reseller' },
    { _id: 5, name: "Server", icon: "bi bi-database mx-2" },
    { _id: 6, name: "Tally Release", icon: "bi bi-x-diamond mx-2" },
    { _id: 7, name: "Subscription", icon: "bi bi-sliders2-vertical mx-2" },
    { _id: 8, name: "Billing", icon: "bi bi-receipt mx-2" },
    { _id: 9, name: "Coupons & Schemes", icon: "bi bi-boxes mx-2" },
    { _id: 10, name: "Product", icon: "bi bi-p-square-fill mx-2" },
    { _id: 11, name: "Reports", icon: "bi bi-graph-up-arrow mx-2", drop: "bi bi-chevron-compact-right", drop_items: ["MRR REPORT", "ACCOUNT MANAGER", "PARTNER REPORT"] },
    { _id: 12, name: "Payment Report", icon: "bi bi-credit-card mx-2" },
    { _id: 13, name: "Settings", icon: "bi bi-gear mx-2" },
    { _id: 14, name: "Account Manager", icon: "bi bi-person-check mx-2" },
    { _id: 15, name: "Logs", icon: "bi bi-list-ul mx-2", drop: "bi bi-chevron-compact-right", drop_items: ["Audit Logs", "Instance Logs", "VM Logs"] },
  ]


  reportOpen = false
  logsOpen = false
  dropItemName = ""
  openDropDown(type: any) {

    if (type.toLowerCase() === "reports") {
      this.reportOpen = !this.reportOpen;
      this.logsOpen = false;
      this.dropItemName = this.reportOpen ? type : '';
    } else if (type.toLowerCase() === "logs") {
      this.logsOpen = !this.logsOpen;
      this.reportOpen = false;
      this.dropItemName = this.logsOpen ? type : '';
    }
    else {
      this.logsOpen = false;
      this.reportOpen = false;
      this.dropItemName = ''
    }

  }


}
