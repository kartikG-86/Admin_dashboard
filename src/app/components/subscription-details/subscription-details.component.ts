import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-details',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule],
  templateUrl: './subscription-details.component.html',
  styleUrl: './subscription-details.component.css'
})
export class SubscriptionDetailsComponent {

  subId: any
  selectSection = "Overview"
  sections = ["Overview", "Order History", "Recent Activities", "License Details"]

  billColumns = ["Bill No.", "Date", "Action", "Credit", "Debit"]

  billData: any[] = [{
    "Bill No.": "trans_21107",
    "Date": "22/07/2024",
    "Action": "Create new subscription.",
    "Credit": 0,
    "Debit": 1000
  }]


  subscriptionDetails: any[] = [
    { key: 'Subscription ID', value: 'SUB-P012285' },
    { key: 'Subscriber Since', value: '11/07/2024' },
    { key: 'Sales Person', value: 'Akshay Gupta' },
    { key: 'Place of Supply', value: '' }, // Placeholder for Place of Supply
    { key: 'GST Treatment', value: '' },  // Placeholder for GST Treatment
    { key: 'Total Lifetime logins', value: '0' },
    { key: 'Logins (past 30 days)', value: '0' },
    { key: 'Last Login', value: '05/03/2024, 09:22 AM' },
    { key: 'Tally Serial No.', value: '' }, // Placeholder for Tally Serial No.
    { key: 'Tally Serial No By Customer', value: '' } // Placeholder for Tally Serial No By Customer
  ];
  constructor(public router: Router, public route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.subId = params["id"]
    })
  }

  changeSection(type: any) {
    this.selectSection = type
  }

  getData(index: any, type: any) {
    return this.billData[index][type];
  }
}
