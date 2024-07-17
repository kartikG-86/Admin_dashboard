import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-reseller',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './reseller.component.html',
  styleUrl: './reseller.component.css'
})
export class ResellerComponent implements OnInit {
  data: any[] = []
  columns: any[] = []

  isSearch = false
  docPerPage = 5
  dataPerPage: any[] = []
  totalPages = 0
  displayPages = 3
  start = 0
  end = 5
  modalTitle = ""
  modalStatus: string = ''
  modalIndex!: any

  accountManagers = [
    "Olivia",
    "Liam",
    "Emma",
    "Noah",
    "Ava",
    "Oliver",
    "Sophia",
    "Elijah",
    "Isabella",
    "James",
    "Mia",
    "Benjamin",
    "Charlotte",
    "Lucas",
    "Amelia",
    "Henry",
    "Harper",
    "Alexander",
    "Evelyn",
    "William"
  ];

  partnersDataColumnName = [
    "Reseller Id",
    "Account Manager",
    "Label",
    "Company Name",
    "Reseller Type",
    "Tally Yearly Price",
    "Wallet",
    "Paid Sub",
    "Trial Sub",
    "Total Users",
    "Active Customer",
    "Status",
    "SSL",
    "Actions"
  ];

  partnerRequestColumnName = [
    "Partner Name",
    "Mobile",
    "Email",
    "Company Name",
    "Account Manager",
    "Country",
    "State",
    "Sales Team",
    "Support Team",
    "Created At",
    "Category",
    "Approved By",
    "Status",
    "Actions"
  ];

  partnerRequestData = [
    {
      "Partner Name": "Testing Sellers 08",
      "Mobile": "9874239024",
      "Email": "Testingsellers02@yopmail.com",
      "Company Name": "Testing Company 08",
      "Account Manager": "Ankita Tiwary",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 4,
      "Support Team": 2,
      "Created At": "Jul 15, 2024, 13:59",
      "Category": "3_star",
      "Approved By": "Vikas",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers 06",
      "Mobile": "9873489737",
      "Email": "Sample02@yopmail.com",
      "Company Name": "Testing Company Tech Live",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 2,
      "Support Team": 1,
      "Created At": "Jul 15, 2024, 13:47",
      "Category": "3_star",
      "Approved By": "Vikas",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers Name",
      "Mobile": "9873247220",
      "Email": "Aquatesting01@yopmail.com",
      "Company Name": "Testing Sample Live Technology Company",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 4,
      "Support Team": 2,
      "Created At": "Jul 15, 2024, 13:41",
      "Category": "5_star",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers",
      "Mobile": "8736384673",
      "Email": "Sample01@yopmail.com",
      "Company Name": "Sample Company 01",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 2,
      "Support Team": 2,
      "Created At": "Jul 15, 2024, 13:16",
      "Category": "associate_partner",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Akshay",
      "Mobile": "65656565656",
      "Email": "Contact@comhard.co.in",
      "Company Name": "Ctpl",
      "Account Manager": "",
      "Country": "India",
      "State": "Delhi",
      "Sales Team": 3,
      "Support Team": 3,
      "Created At": "Jul 11, 2024, 13:35",
      "Category": "5_star",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Akshay",
      "Mobile": "8285427613",
      "Email": "Demo44@gmail.com",
      "Company Name": "Ctpl",
      "Account Manager": "",
      "Country": "India",
      "State": "Delhi",
      "Sales Team": 25,
      "Support Team": 8,
      "Created At": "Jul 11, 2024, 13:34",
      "Category": "5_star",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Nishu",
      "Mobile": "8757000921",
      "Email": "Nishu1@gamil.com",
      "Company Name": "Comhard",
      "Account Manager": "",
      "Country": "India",
      "State": "Uttar Pradesh",
      "Sales Team": 4,
      "Support Team": 2,
      "Created At": "Jul 10, 2024, 18:07",
      "Category": "3_star",
      "Approved By": "Vikas",
      "Status": "Approved",
      "Actions": ""
    },
    {
      "Partner Name": "Vikas",
      "Mobile": "07217251220",
      "Email": "Vikas@comhard.co.in",
      "Company Name": "Comhard",
      "Account Manager": "",
      "Country": "India",
      "State": "Jharkhand",
      "Sales Team": 0,
      "Support Team": 1,
      "Created At": "Jul 10, 2024, 17:54",
      "Category": "N/A",
      "Approved By": "N/A",
      "Status": "Approved",
      "Actions": ""
    },
    {
      "Partner Name": "Akash",
      "Mobile": "123456789",
      "Email": "Akash123@yopmail.com",
      "Company Name": "Comhard",
      "Account Manager": "",
      "Country": "India",
      "State": "Uttar Pradesh",
      "Sales Team": 10,
      "Support Team": 2,
      "Created At": "Jul 9, 2024, 17:30",
      "Category": "N/A",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Vikas",
      "Mobile": "08285427612",
      "Email": "Vikas@gmail.com",
      "Company Name": "Comhard",
      "Account Manager": "",
      "Country": "India",
      "State": "Uttar Pradesh",
      "Sales Team": 12,
      "Support Team": 3,
      "Created At": "Jul 9, 2024, 17:23",
      "Category": "N/A",
      "Approved By": "N/A",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Nishu",
      "Mobile": "8757000791",
      "Email": "Nishu@gmail.com",
      "Company Name": "Comhard",
      "Account Manager": "",
      "Country": "India",
      "State": "Uttar Pradesh",
      "Sales Team": 10,
      "Support Team": 4,
      "Created At": "Jul 9, 2024, 17:16",
      "Category": "N/A",
      "Approved By": "N/A",
      "Status": "Approved",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers 05",
      "Mobile": "9873247237",
      "Email": "Testingsample05@yopmail.com",
      "Company Name": "Sample Company",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 5,
      "Support Team": 1,
      "Created At": "Jul 9, 2024, 16:04",
      "Category": "3_star",
      "Approved By": "N/A",
      "Status": "Rejected",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers 01",
      "Mobile": "9873247232",
      "Email": "Testingsample04@yopmail.com",
      "Company Name": "Sample Company",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 5,
      "Support Team": 1,
      "Created At": "Jul 9, 2024, 15:23",
      "Category": "3_star",
      "Approved By": "N/A",
      "Status": "Approved",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Sellers",
      "Mobile": "9873247233",
      "Email": "Testingsample03@yopmail.com",
      "Company Name": "Sample Company",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 5,
      "Support Team": 1,
      "Created At": "Jul 9, 2024, 13:56",
      "Category": "3_star",
      "Approved By": "Vikas",
      "Status": "Pending",
      "Actions": ""
    },
    {
      "Partner Name": "Testing Seller",
      "Mobile": "9873247230",
      "Email": "Testingsample02@yopmail.com",
      "Company Name": "Sample Company",
      "Account Manager": "",
      "Country": "India",
      "State": "Punjab",
      "Sales Team": 4,
      "Support Team": 1,
      "Created At": "Jul 9, 2024, 12:30",
      "Category": "3_star",
      "Approved By": "Vikas",
      "Status": "Approved",
      "Actions": ""
    },
    {
      "Partner Name": "Testingsample",
      "Mobile": "9873247239",
      "Email": "Testingsample01@yopmail.com",
      "Company Name": "Sample Company Name",
      "Account Manager": "",
      "Country": "india",
      "State": "punjab",
      "Sales Team": 4,
      "Support Team": 1,
      "Created At": "Jul 8, 2024, 15:23",
      "Category": "N/A",
      "Approved By": "N/A",
      "Status": "Rejected",
      "Actions": ""
    }
  ];

  partnersData = [
    {
      "Reseller Id": 1,
      "Account Manager": "Akshay Gupta",
      "Label": "-",
      "Company Name": "Comhard Technologies Pvt Ltd",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 6000,
      "Wallet": 661216.18,
      "Paid Sub": 2852,
      "Trial Sub": 21,
      "Total Users": 20669,
      "Active Customer": 2873,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 41,
      "Account Manager": "Akshay Gupta",
      "Label": "-",
      "Company Name": "Rudra Pvt Ltd.",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 6000,
      "Wallet": 0.00,
      "Paid Sub": 0,
      "Trial Sub": 0,
      "Total Users": 2,
      "Active Customer": 0,
      "Status": "InActive",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 52,
      "Account Manager": "Harshit Aditya",
      "Label": "-",
      "Company Name": "Computer Plus",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 10116.44,
      "Paid Sub": 13,
      "Trial Sub": 0,
      "Total Users": 27,
      "Active Customer": 13,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 57,
      "Account Manager": "Harshit Aditya",
      "Label": "-",
      "Company Name": "Ranjan Computer",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2000,
      "Wallet": 14000.00,
      "Paid Sub": 9,
      "Trial Sub": 0,
      "Total Users": 21,
      "Active Customer": 9,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 80,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Live Technology",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 4500,
      "Wallet": 43710.41,
      "Paid Sub": 14,
      "Trial Sub": 0,
      "Total Users": 66,
      "Active Customer": 14,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 117,
      "Account Manager": "Akshay Gupta",
      "Label": "-",
      "Company Name": "Alpha",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 6000,
      "Wallet": 0.00,
      "Paid Sub": 0,
      "Trial Sub": 0,
      "Total Users": 2,
      "Active Customer": 0,
      "Status": "InActive",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 154,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Tallytechnologies",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 51877.58,
      "Paid Sub": 139,
      "Trial Sub": 1,
      "Total Users": 403,
      "Active Customer": 140,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 159,
      "Account Manager": "Kuldeep Shukla",
      "Label": "-",
      "Company Name": "Electroware Infotech Private Limited",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 4531.29,
      "Paid Sub": 52,
      "Trial Sub": 0,
      "Total Users": 150,
      "Active Customer": 52,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 171,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Amsan Technology",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 3000,
      "Wallet": 658.08,
      "Paid Sub": 86,
      "Trial Sub": 0,
      "Total Users": 353,
      "Active Customer": 86,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 195,
      "Account Manager": "Vineet Goyal",
      "Label": "-",
      "Company Name": "Microplus Comnet",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 671.23,
      "Paid Sub": 6,
      "Trial Sub": 0,
      "Total Users": 26,
      "Active Customer": 6,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 198,
      "Account Manager": "Harshit Aditya",
      "Label": "-",
      "Company Name": "Team Solutions",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 3600,
      "Wallet": 2992.71,
      "Paid Sub": 25,
      "Trial Sub": 0,
      "Total Users": 134,
      "Active Customer": 25,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 200,
      "Account Manager": "Kuldeep Shukla",
      "Label": "-",
      "Company Name": "A2 Insight Corporate Solutions",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 4500,
      "Wallet": 2103.34,
      "Paid Sub": 9,
      "Trial Sub": 0,
      "Total Users": 16,
      "Active Customer": 9,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 205,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Kamdhenu Solutions",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 6000,
      "Wallet": 0.14,
      "Paid Sub": 0,
      "Trial Sub": 0,
      "Total Users": 3,
      "Active Customer": 0,
      "Status": "InActive",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 248,
      "Account Manager": "Harshit Aditya",
      "Label": "-",
      "Company Name": "Systech Solutions",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 27500.00,
      "Paid Sub": 3,
      "Trial Sub": 0,
      "Total Users": 12,
      "Active Customer": 3,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 251,
      "Account Manager": "Vineet Goyal",
      "Label": "-",
      "Company Name": "Madhav Infosolutions",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 53593.83,
      "Paid Sub": 114,
      "Trial Sub": 0,
      "Total Users": 360,
      "Active Customer": 114,
      "Status": "Active",
      "SSL": "Yes",
      "Actions": "Action"
    },
    {
      "Reseller Id": 257,
      "Account Manager": "Kuldeep Shukla",
      "Label": "-",
      "Company Name": "Try My Solutions",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 6000,
      "Wallet": 0.00,
      "Paid Sub": 0,
      "Trial Sub": 0,
      "Total Users": 3,
      "Active Customer": 0,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 262,
      "Account Manager": "Harshit Aditya",
      "Label": "-",
      "Company Name": "Sanyam Consultants",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 2500,
      "Wallet": 0.00,
      "Paid Sub": 3,
      "Trial Sub": 0,
      "Total Users": 10,
      "Active Customer": 3,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 270,
      "Account Manager": "Akshay Gupta",
      "Label": "-",
      "Company Name": "Marsone",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 4000,
      "Wallet": 0.00,
      "Paid Sub": 0,
      "Trial Sub": 0,
      "Total Users": 4,
      "Active Customer": 0,
      "Status": "InActive",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 272,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Falcon",
      "Reseller Type": "Partner",
      "Tally Yearly Price": 6000,
      "Wallet": -8000.00,
      "Paid Sub": 3,
      "Trial Sub": 0,
      "Total Users": 14,
      "Active Customer": 3,
      "Status": "InActive",
      "SSL": "No",
      "Actions": "Action"
    },
    {
      "Reseller Id": 273,
      "Account Manager": "Arpita Tiwary",
      "Label": "-",
      "Company Name": "Sky Services",
      "Reseller Type": "White Label",
      "Tally Yearly Price": 4000,
      "Wallet": 1763.30,
      "Paid Sub": 5,
      "Trial Sub": 0,
      "Total Users": 10,
      "Active Customer": 5,
      "Status": "Active",
      "SSL": "No",
      "Actions": "Action"
    }
  ];



  currentSection = "partnersRequest"
  labelSearchValue: string = '';
  labelSearchData: any[] = []

  labels = [{
    name: "Re-active",
    color: '#ffede9'
  }, {
    name: "Trial",
    color: '#dffff3'
  }]
  status = ["Suspend", "Active"]

  constructor() {
    this.labelSearchData = [...this.labels]
    if (this.currentSection == "partners") {
      this.data = [...this.partnersData]
      this.columns = [...this.partnersDataColumnName]
    }
    else {
      this.data = [...this.partnerRequestData]
      this.columns = [...this.partnerRequestColumnName]

    }
  }

  ngOnInit(): void {
    this.getDocPerPages(0, this.docPerPage)
    this.totalPages = this.data.length
  }

  searchForm = new FormGroup({
    companyName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    resellerType: new FormControl(''),
    registrationDateFrom: new FormControl(''),
    registrationDateTo: new FormControl(''),
    noOfAccountsFrom: new FormControl(''),
    noOfAccountsTo: new FormControl(''),
    creditFrom: new FormControl(''),
    creditTo: new FormControl(''),
    label: new FormControl(''),
    accountManager: new FormControl(''),
    status: new FormControl('All')
  })

  editForm = new FormGroup({
    status: new FormControl(''),
    remark: new FormControl('')
  })

  openSearch() {
    this.isSearch = !this.isSearch
  }

  onSubmit() {
    console.log(this.searchForm.value)
  }

  resetFilters() {
    this.searchForm.reset({
      companyName: '',
      email: '',
      mobile: '',
      resellerType: '',
      registrationDateFrom: '',
      registrationDateTo: '',
      noOfAccountsFrom: '',
      noOfAccountsTo: '',
      creditFrom: '',
      creditTo: '',
      label: '',
      accountManager: '',
      status: 'All'
    });
  }

  changeSection(type: any) {
    this.currentSection = type
    if (type == "partners") {
      this.data = [...this.partnersData]
      this.columns = [...this.partnersDataColumnName]
    }
    else {
      this.data = [...this.partnerRequestData]
      this.columns = [...this.partnerRequestColumnName]
    }

    this.getDocPerPages(0, this.docPerPage)
    this.totalPages = this.data.length
  }


  onLabelSearch() {
    if (this.labelSearchValue == '') {
      this.labelSearchData = [...this.labels]
    }
    else {
      this.labelSearchData = this.labels.filter((label) => {
        return label.name.toLowerCase().includes(this.labelSearchValue)
      })
    }
  }

  rowPerPage(type: any) {
    this.docPerPage = Number(type.target.innerHTML);
    this.start = 0;
    this.end = this.docPerPage;
    this.getDocPerPages(this.start, this.end);
  }

  changePage(type: any) {

    if (type === 'left') {

      if (this.start > 0) {
        this.end = this.start;
        this.start = this.start - this.docPerPage;
      }
    } else {

      if (this.dataPerPage.length === this.docPerPage) {
        this.start = this.end;
        this.end = this.start + this.docPerPage;
      }
    }

    // Ensure start and end are within valid range
    this.start = Math.max(0, this.start);
    this.end = Math.min(this.start + this.docPerPage, this.data.length);

    console.log(this.start, this.end);

    this.getDocPerPages(this.start, this.end);

  }

  goToPage(page: string) {
    if (page === 'first') {
      this.start = 0;
      this.end = this.docPerPage;
    } else if (page === 'last') {
      this.end = this.data.length;
      this.start = this.end - this.docPerPage;
      if (this.start < 0) this.start = 0;
    }
    if (page === 'last' && this.data.length % this.docPerPage !== 0) {
      this.start = this.data.length - (this.data.length % this.docPerPage);
      this.end = this.data.length;
    }

    console.log(this.start, this.end);
    this.getDocPerPages(this.start, this.end);
  }

  getData(index: any, type: any) {
    return this.dataPerPage[index][type];
  }

  getDocPerPages(start: any, end: any) {
    this.dataPerPage = this.data.slice(start, end)
  }

  modalOpen(index: number) {
    this.modalIndex = index
    this.modalTitle = this.getData(index, "Company Name")
    this.modalStatus = this.getData(index, "Status")
    console.log(this.modalStatus)
    this.editForm.setValue({
      status: this.modalStatus,
      remark: ''
    })
  }

  onEdit() {
    this.data[this.modalIndex]["Status"] = this.editForm.value.status
    this.getDocPerPages(0, this.docPerPage)
  }




}
