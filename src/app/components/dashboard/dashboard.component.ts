import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import Chart from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  donughtLabels = [
    'Subscriptions',
    'Customers',
  ]
  donughtBackColor = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
  ]
  donughtData = [502, 753]

  combinedData: any[] = []

  graphType: any = 'line'

  graphPeriod: any = 'day'

  lineChartConfig: any = {
    type: 'line',
    data: {
      labels: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      datasets: [{
        label: 'Churn Subscription',
        data: [23, 45, 67, 12, 89, 34, 56, 78, 90, 21, 43, 65],

        borderColor: 'rgb(255, 99, 132)',

        borderWidth: 2
      }, {
        label: 'New Subscription',
        data: [5, 95, 15, 85, 25, 75, 35, 65, 45, 55, 10, 90],

        borderColor: 'black',

        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
              modifierKey: 'ctrl',
              speed: 0.2
            },

          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  barChartConfig: any = {
    type: 'bar',
    data: {
      labels: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      datasets: [{
        label: 'Churn Subscription',
        data: [23, 45, 67, 12, 89, 34, 56, 78, 90, 21, 43, 65],

        borderColor: 'rgb(255, 99, 132)',

        borderWidth: 2
      }, {
        label: 'New Subscription',
        data: [5, 95, 15, 85, 25, 75, 35, 65, 45, 55, 10, 90],

        borderColor: 'black',

        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
              modifierKey: 'ctrl',
              speed: 0.2
            },

          }
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }

  // line chart
  lineChart: any
  barChart: any
  constructor() {
    Chart.register(zoomPlugin)
  }
  ngOnInit(): void {
    this.combineData()
    this.changeSubChart('line')
  }

  combineData() {
    this.combinedData = this.donughtLabels.map((label, index) => {
      return {
        label: label,
        backgroundColor: this.donughtBackColor[index],
        data: this.donughtData[index]
      };
    });
    this.createChart();
  }
  public donughtChart: any;


  createChart() {

    this.donughtChart = new Chart("MyChart", {
      type: 'doughnut',

      data: {
        labels: this.donughtLabels,
        datasets: [{
          data: this.donughtData,
          backgroundColor: this.donughtBackColor,
          hoverOffset: 4,
          borderWidth: 2,
        }]
      },
      options: {
        aspectRatio: 1.5,
        cutout: '70%',
        plugins: {
          legend: {
            display: false,
          },

        },

      },

    });
  }


  sidebarItems = [
    { _id: 1, name: "Dashboard", icon: "bi bi-grid mx-2" },
    { _id: 2, name: "Instance", icon: "bi bi-person mx-2" },
    { _id: 3, name: "Cloud User", icon: "bi bi-people mx-2" },
    { _id: 4, name: "Reseller", icon: "bi bi-tags mx-2" },
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



  filterOptions = [{
    type: "Timeline",
    options: [
      'This Week',
      'Last Week',
      'Next Week',
      'This Month',
      'Last Month',
      'Next Month',
      'This Year',
      'Last Year',
      'Next Year'
    ]
  }, {
    type: "Custom Date"
  }, {
    type: "Account Manager",
    options: ["Contact@comhard.co.in",
      "Neetu@comhard.co.in"]
  },]



  // renewal Summary data

  renewalSummary = [
    { renewals: "Total Renewals", subscriptions: 425, users: 1181, amount: 4230994.50 },
    { renewals: "Renewed", subscriptions: 92, users: 239, amount: 799593.00 },
    { renewals: "Upgrades", subscriptions: 43, users: 219, amount: 173781.35 },
    { renewals: "Downgrade", subscriptions: 9, users: 25, amount: 35839.41 },
    { renewals: "Upcoming Renewals", subscriptions: 307, users: 892, amount: 3159922.50 },
    { renewals: "Expired", subscriptions: 35, users: 80, amount: 375355.00 },
    { renewals: "Deleted", subscriptions: 15, users: 28, amount: 91660.00 }
  ];


  graphBtnClicked(type: any) {
    this.graphType = type
    this.lineChart.destroy()
    this.changeSubChart(type)
  }

  changeSubChart(type: any) {
    if (this.lineChart) {
      this.lineChart.destroy()
    }
    if (type == 'line') {
      this.lineChart = new Chart("sub_chart", this.lineChartConfig);
    }
    if (type == 'bar') {
      this.lineChart = new Chart("sub_chart", this.barChartConfig);
    }
  }

  changeGraphPeriod(type: any) {
    this.graphPeriod = type
  }




}
