import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-instance',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, ReactiveFormsModule, FormsModule],
  templateUrl: './instance.component.html',
  styleUrl: './instance.component.css'
})
export class InstanceComponent implements OnInit {
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

  instanceData = [
    {
      "Server Name": "Cloud150",
      "Drive Name": "z",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud150",
      "Drive Name": "y",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud150",
      "Drive Name": "x",
      "Subscription ID": "SUB-P012285",
      "Customer Email": "harshitaditya2016@gmail.com",
      "No. Of Users": 1,
      "Stage": "Live",
      "Status": "Active",
      "Partner Company": "Comhard Technologies Pvt Ltd",
      "Sales Person": "Akshay Gupta",
      "Plan Name": "Tally On Cloud - Yearly",
      "Start Date": "11-Jul-2024",
      "Next Billing Date": "11-Jul-2025",
      "Company Name": "Comhard"
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "z",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "y",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "x",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "w",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "v",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "u",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "t",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "s",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "r",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "q",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "p",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "o",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "n",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "m",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "l",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "k",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "j",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "i",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",

    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "h",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "g",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "f",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "e",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "d",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "b",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud400",
      "Drive Name": "a",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "z",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "y",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "x",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "w",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "v",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "u",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "t",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "s",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "r",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "q",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "p",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "o",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "n",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "m",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "l",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0

      ,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "k",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "j",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "i",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "h",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "g",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "f",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    },
    {
      "Server Name": "Cloud399",
      "Drive Name": "e",
      "Subscription ID": "",
      "Customer Email": "",
      "No. Of Users": 0,
      "Stage": "N/A",
      "Status": "Active",
      "Partner Company": "",
      "Sales Person": "",
      "Plan Name": "",
      "Start Date": "",
      "Next Billing Date": "",
      "Company Name": ""
    }
  ]

  tableColumnName = [
    "Server Name",
    "Drive Name",
    "Subscription ID",
    "Customer Email",
    "No. Of Users",
    "Stage",
    "Status",
    "Partner Company",
    "Sales Person",
    "Plan Name",
    "Start Date",
    "Next Billing Date",
    "Company Name"
  ];

  docPerPage = 5
  dataPerPage:any[] =[]
  totalPages = 0
  displayPages = 3
  firstPage = 1;
  secondPage = 2;
  thirdPage = 3;
  start = 1
  end = 5

  constructor(){}
  
  ngOnInit(): void {
    this.dataPerPage = this.instanceData.slice(0, this.docPerPage);
    this.totalPages = this.instanceData.length
  }

  billFromDate: string | null = null;
  billToDate: string | null = null;


  billFrom(event: any): void {
    console.log(this.billFromDate);
  }
  billTo(event: any): void {
    console.log(this.billToDate);
  }

  
  rowPerPage(type:any){
    this.docPerPage = Number(type.target.innerHTML)
    this.dataPerPage = this.instanceData.slice(0, this.docPerPage);
  }

  changePage(type:any){
     this.start = this.docPerPage * (Number(type) - 1)
     this.end  = this.start + this.docPerPage
    this.dataPerPage = this.instanceData.slice(this.start,this.end)
  }

  changeNoOfPages(type:any){
    console.log(this.thirdPage)
    if(type == '1' && this.thirdPage < this.instanceData.length / this.docPerPage){
      this.firstPage = this.thirdPage + 1
      this.secondPage = this.firstPage + 1;
      this.thirdPage = this.secondPage + 1
      
    }
    else if(this.thirdPage > 3 && type== '-1'){
      this.thirdPage = this.firstPage - 1;
      this.secondPage = this.thirdPage - 1
      this.firstPage = this.secondPage -1
    }

    this.changePage(this.firstPage)
  }

  getData(index:any,type:any){
    console.log(type , index)
    console.log(this.dataPerPage[index])
    return this.dataPerPage[index][type];
  }

}
