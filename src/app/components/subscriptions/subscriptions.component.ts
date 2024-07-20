import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, ReactiveFormsModule, TableComponent],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {

  selectSub: any
  isSearch = false
  stages: string[] = ['Live', 'Expired', 'Trial', 'Trial Expired', 'Deleted'];

  columnName = [
    'Sub ID',
    'Company Name',
    'Partner Email',
    'Account Manager',
    'Set For',
    'Plan Name',
    'Unit Price',
    'No Of Users',
    'Amount',
    'Current MRR',
    'Tally Serial No',
    'Tally Serial No By Customer',
    'Start Date',
    'Next Billing date',
    'Last billing date',
    'Stage',
    'Status'
  ];

  subData = [
    {
      "Sub ID": "SUB-P012304",
      "Company Name": "Comhard",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Tally On Cloud 7 Days Trial Plan",
      "Unit Price": 0,
      "No Of Users": 1,
      "Amount": 0,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "755055081",
      "Start Date": "19/07/24",
      "Next Billing date": "26/07/24",
      "Last billing date": "N/A",
      "Stage": "Trial",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012303",
      "Company Name": "Seefat Technology Pvt Ltd",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Tally On Cloud 7 Days Trial Plan",
      "Unit Price": 0,
      "No Of Users": 2,
      "Amount": 0,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "767479968",
      "Start Date": "19/07/24",
      "Next Billing date": "26/07/24",
      "Last billing date": "N/A",
      "Stage": "Trial",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012302",
      "Company Name": "Om Plastic",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Quarterly",
      "Unit Price": 3000,
      "No Of Users": 1,
      "Amount": 3000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/10/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012301",
      "Company Name": "Radhika Tax Consultants",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012300",
      "Company Name": "Radhika Tax Consultants",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012299",
      "Company Name": "Radhika Tax Consultants",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012298",
      "Company Name": "Comhard Technologies Pvt Ltd",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012297",
      "Company Name": "Niwar Corner",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "19/07/24",
      "Next Billing date": "19/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012296",
      "Company Name": "Chauhan Traders",
      "Partner Email": "Shivamkumar1966@yahoo.com",
      "Account Manager": "Yash Kumar",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "18/07/24",
      "Next Billing date": "18/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012295",
      "Company Name": "Individual",
      "Partner Email": "Pyramidsystem@gmail.com",
      "Account Manager": "Raghvendra",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "18/07/24",
      "Next Billing date": "18/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012294",
      "Company Name": "R.k.board Industry",
      "Partner Email": "Tallypathankot@gmail.com",
      "Account Manager": "Swadhin Jana",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "18/07/24",
      "Next Billing date": "18/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012293",
      "Company Name": "Kapil Enterprises",
      "Partner Email": "Tallypathankot@gmail.com",
      "Account Manager": "Swadhin Jana",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 1000,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "18/07/24",
      "Next Billing date": "18/08/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012292",
      "Company Name": "R.k.board Industry",
      "Partner Email": "Tallypathankot@gmail.com",
      "Account Manager": "Swadhin Jana",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "17/07/24",
      "Next Billing date": "17/08/24",
      "Last billing date": "N/A",
      "Stage": "Deleted",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012291",
      "Company Name": "Hema Fab",
      "Partner Email": "Pyramidsystem@gmail.com",
      "Account Manager": "Raghvendra",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "17/07/24",
      "Next Billing date": "17/08/24",
      "Last billing date": "N/A",
      "Stage": "Deleted",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012290",
      "Company Name": "P Dilip Kumar And Associates",
      "Partner Email": "Pyramidsystem@gmail.com",
      "Account Manager": "Raghvendra",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "17/07/24",
      "Next Billing date": "17/08/24",
      "Last billing date": "N/A",
      "Stage": "Deleted",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012289",
      "Company Name": "P Dilip Kumar And Associates",
      "Partner Email": "Pyramidsystem@gmail.com",
      "Account Manager": "Raghvendra",
      "Set For": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Monthly",
      "Unit Price": 1000,
      "No Of Users": 1,
      "Amount": 1000,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "17/07/24",
      "Next Billing date": "17/08/24",
      "Last billing date": "N/A",
      "Stage": "Deleted",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012288",
      "Company Name": "Mkenterprises_bnd@yahoo.com",
      "Partner Email": "Kuldeep Shukla",
      "Account Manager": "Auto Expire",
      "Plan Name": "Dedicated Virtual Machine - Trial",
      "Unit Price": 0,
      "No Of Users": 1,
      "Amount": 0,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "17/07/24",
      "Next Billing date": "24/07/24",
      "Last billing date": "N/A",
      "Stage": "Trial",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012287",
      "Company Name": "Comhard",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Tally On Cloud 7 Days Trial Plan",
      "Unit Price": 1000,
      "No Of Users": 20,
      "Amount": 20000,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "15/07/24",
      "Next Billing date": "22/07/24",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012286",
      "Company Name": "Contact@comhard.co.in",
      "Partner Email": "Akshay Gupta",
      "Account Manager": "Auto Expire",
      "Plan Name": "Tally On Cloud 7 Days Trial Plan",
      "Unit Price": 0,
      "No Of Users": 3,
      "Amount": 0,
      "Current MRR": 0,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "11/07/24",
      "Next Billing date": "18/07/24",
      "Last billing date": "N/A",
      "Stage": "Trial",
      "Status": "Active"
    },
    {
      "Sub ID": "SUB-P012285",
      "Company Name": "Comhard",
      "Partner Email": "Contact@comhard.co.in",
      "Account Manager": "Akshay Gupta",
      "Set For": "Auto Expire",
      "Plan Name": "Tally On Cloud - Yearly",
      "Unit Price": 6000,
      "No Of Users": 1,
      "Amount": 6000,
      "Current MRR": 500,
      "Tally Serial No": "N/A",
      "Tally Serial No By Customer": "N/A",
      "Start Date": "11/07/24",
      "Next Billing date": "11/07/25",
      "Last billing date": "N/A",
      "Stage": "Live",
      "Status": "Active"
    }
  ];

  plans = [
    "Tally On Cloud 7 Days Trial Plan",
    "Marg On Cloud 7 Days Trial Plan",
    "Tally On Cloud - Yearly",
    "Tally On Cloud - Half Yearly",
    "Tally On Cloud - Quarterly",
    "Tally On Cloud - 2 Years",
    "Tally On Cloud - 3 Years",
    "Tally On Cloud - 4 Years",
    "Tally On Cloud - 5 Years",
    "Tally On Cloud - 7 Years",
    "Tally On Cloud - 10 Years",
    "Tally On Cloud - Life Time",
    "User Based Cloud-marg-yearly",
    "Tally On Cloud - Monthly",
    "Miracle On Cloud - Yearly",
    "Tally Cloud Yearly Essential",
    "Tally Cloud Yearly Advance",
    "Tally Cloud Yearly Enterprise",
    "Tally Cloud 3 Year Essential",
    "Tally Cloud 3 Year Advance",
    "Tally Cloud 3 Year Enterprise",
    "Tally Cloud Monthly Essential",
    "Tally Cloud Monthly Advance",
    "Tally Cloud Monthly Enterprise",
    "Dedicated Virtual Machine - Yearly",
    "Dedicated Virtual Machine - Monthly",
    "Dedicated Virtual Machine - Half Yearly",
    "Dedicated Virtual Machine - Quarterly",
    "Dedicated Virtual Machine - 2 Years",
    "Dedicated Virtual Machine - 3 Years",
    "Dedicated Virtual Machine - 5 Years",
    "Dedicated Virtual Machine - Trial"
  ];

  partners = [
    "JUGITER Technologies India Pvt Ltd",
    "Shivam Enterprises",
    "Pyramid System",
    "ADH INFOTECH SERVICES",
    "BRIGHT SOFTWARE SOLUTIONS",
    "MK ENTERPRISES",
    "Allaqaband Sons",
    "Jas Technologies",
    "Appcrush Technologies Pvt Ltd",
    "Accosafe Business Services Pvt Ltd",
    "Active B Solutions",
    "Soft Solutions",
    "Arsh Enterprises",
    "marsoneinnovators",
    "Aim infocom",
    "Prompt Computer and Services",
    "Siyaram Infotech",
    "Logiconic Software Solutions",
    "Global IT",
    "Sonojas Services Pvt Ltd",
    "Comhard Technologies Pvt Ltd",
    "AMD Solutions",
    "MR infosystem",
    "Sky Services",
    "Deepali Infotech Pvt Ltd",
    "Micronics Services",
    "Dreams Enterprises",
    "Megha Systems",
    "Vivekanand Infotech",
    "Heights Information Technology",
    "ALP Soft Tech",
    "Ecosys Technologies",
    "Pioneer Software Solutions Pvt Ltd",
    "Shree Mangal Infotech",
    "UJ Software And Solutions",
    "Integro IT Solutions",
    "Vicky Suppliers",
    "Modi Infotech Services",
    "IIT HUB",
    "A G Infosystems",
    "ASD Computers",
    "Deepa Enterprises",
    "Dream Planet",
    "C LINK SOLUTIONS",
    "Madhav Infosolutions",
    "AARS Computers Private Limited",
    "Techno Serva",
    "Artha Infinity",
    "Accounting Solutions",
    "RK Associates",
    "Computer Plaza",
    "Ace Infowares",
    "Arham Infotech Inc",
    "AK Software",
    "Techshield Integrated Solutions",
    "Oribytes Software and Solutions",
    "Tally Plus",
    "Sir Ji Computers",
    "Atul Computers & Solutions",
    "Virtuous Compliances Pvt Ltd",
    "A K Computer Services",
    "AK Solution-1",
    "Choice Infotech",
    "Dadhimati Sales and Services",
    "AVETECH INFONET",
    "Brother Infotech"
  ];

  accountManagers = [
    "Contact@comhard.co.in",
    "Neetu@comhard.co.in",
    "Ankita@comhard.co.in",
    "Aman.singh@comhard.co.in",
    "Harshit@comhard.co.in",
    "Kuldeep@comhard.co.in",
    "Vineet@comhard.in",
    "Vishal@comhard.co.in",
    "Naveen@comhard.co.in",
    "Arpita@comhard.co.in",
    "Rashmi@comhard.co.in",
    "Neelakshi@comhard.co.in",
    "Rohini@comhard.co.in",
    "Praveen.kumar@comhard.co.in",
    "Ankit.sharma@comhard.co.in",
    "Anshul@comhard.co.in",
    "Arjun@comhard.co.in",
    "Lucky@comhard.co.in",
    "Vibhav@comhard.co.in",
    "Yash@comhard.co.in",
    "Rohit.s@comhard.co.in",
    "Akanksha@comhard.co.in",
    "Dharmesh@comhard.co.in",
    "Sanket.gawas@comhard.co.in",
    "Prateek@comhard.co.in",
    "Prosun@comhard.co.in",
    "Swadhin@comhard.co.in",
    "Rajkishore@comhard.co.in",
    "Raghvendra@comhard.co.in",
    "Sumit@comhard.co.in"
  ];

  stageTitle: any = "Select Stage";
  planTitle = "Select Plan";
  partnerTitle = "Select Partner";
  accountManagerTitle = "Select Account Manager";



  @ViewChild('stageContainer') stageContainer!: ElementRef;
  @ViewChild('planContainer') planContainer!: ElementRef;
  @ViewChild('partnerContainer') partnerContainer!: ElementRef;
  @ViewChild('accountManagerContainer') accountManagerContainer!: ElementRef;
  dropdownType = ''



  subscriptionTypes = [{
    name: "All Subscription",
    color: '#e0d7f7',
    totalSub: {
      sub: 12239,
      users: 29041,
      amount: '9.77 Cr'
    },
    newSub: {
      sub: 1,
      users: 1,
      amount: '1000'
    }
  }, {
    name: "Paid Subscription",
    color: '#dffff3',
    totalSub: {
      sub: 6837,
      users: 176755,
      amount: '8.32 Cr'
    },
    newSub: {
      sub: 7,
      users: 26,
      amount: '28000'
    }

  }, {
    name: "Trial Subscription",
    color: '#fff6ea',
    totalSub: {
      sub: 305,
      users: 428,
      amount: '34'
    },
    newSub: {
      sub: 0,
      users: 0,
      amount: '0'
    }
  }, {
    name: "Upcoming Renewal",
    color: '#e5f3fa',
    totalSub: {
      sub: 119,
      users: 296,
      amount: '12.77 Lacs'
    },
    newSub: {
      sub: 0,
      users: 0,
      amount: '0'
    }
  }, {
    name: "Expired Subscription",
    color: '#ffede9',
    totalSub: {
      sub: 69,
      users: 194,
      amount: '6.30 Lacs'
    },
    newSub: {
      sub: 0,
      users: 0,
      amount: '0'
    }
  },
  ]

  searchForm: any = new FormGroup({
    startDate: new FormControl(''),
    nextBillingDate: new FormControl(''),
    lastBillingDate: new FormControl(''),
    companyEmailAddress: new FormControl(''),
    subCode: new FormControl(''),
    status: new FormControl(''),
    stage: new FormControl([]),
    plan: new FormControl([]),
    partner: new FormControl([]),
    accountManager: new FormControl(''),
    activate: new FormControl(''),
    tallySerialNo: new FormControl('')
  })

  constructor() {
    this.selectSub = this.subscriptionTypes[0]
  }

  newSubscription() {

  }

  subSelect(type: any) {
    this.selectSub = type
  }

  openSearch() {
    this.isSearch = !this.isSearch
  }

  onSubmit() {
    console.log(this.searchForm.value)
  }

  onMultiSelectChange(event: Event, controlName: string, options: string[]): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const selectedValues = this.searchForm.get(controlName)?.value || [];

    if (value === 'Select All') {
      if (input.checked) {
        this.searchForm.get(controlName)?.setValue([...options]);

        this.selectAllCheckboxes(controlName, true);
      } else {
        this.searchForm.get(controlName)?.setValue([]);
        this.selectAllCheckboxes(controlName, false);
      }
    } else {
      if (input.checked) {
        selectedValues.push(value);
        if (selectedValues.length === options.length) {
          selectedValues.push('Select All');
          this.setSelectAllCheckbox(controlName, true);
        }
      } else {
        const index = selectedValues.indexOf(value);
        if (index > -1) {
          selectedValues.splice(index, 1);
        }
        const selectAllIndex = selectedValues.indexOf('Select All');
        if (selectAllIndex > -1) {
          selectedValues.splice(selectAllIndex, 1);
        }
        this.setSelectAllCheckbox(controlName, false);
      }
      this.searchForm.get(controlName)?.setValue(selectedValues);

    }

  }

  selectAllCheckboxes(controlName: string, checked: boolean): void {
    const checkboxes = document.querySelectorAll(`input[name="${controlName}"]`) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach(checkbox => {
      checkbox.checked = checked;
    });
  }

  setSelectAllCheckbox(controlName: string, checked: boolean): void {
    const selectAllCheckbox = document.getElementById(`${controlName}-selectAll`) as HTMLInputElement;
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = checked;
    }
  }

  getSelectedValues(type: string): string {
    if (type === 'stage') {
      return this.searchForm.value.stage.length > 0 ? this.searchForm.value.stage.join(', ') : 'Select Stage';
    }
    else if (type === 'plan') {
      return this.searchForm.value.plan.length > 0 ? this.searchForm.value.plan.join(', ') : 'Select Plan';
    }
    else if (type === 'partner') {
      return this.searchForm.value.partner.length > 0 ? this.searchForm.value.partner.join(', ') : 'Select Partner';
    }
    else if (type === 'accountManager') {
      return this.searchForm.value.accountManager.length > 0 ? this.searchForm.value.accountManager.join(', ') : 'Select Account Manager';
    }
    return '';
  }

  openDropdown(type: any) {
    this.dropdownType = type
  }

  resetForm() {
    this.searchForm.reset({
      startDate: '',
      nextBillingDate: '',
      lastBillingDate: '',
      companyEmailAddress: '',
      subCode: '',
      status: '',
      stage: [],
      plan: [],
      partner: [],
      accountManager: '',
      activate: '',
      tallySerialNo: ''
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Check if the click was outside the dropdown container

    if (this.stageContainer.nativeElement.contains(event.target)) {
      this.dropdownType = 'stage'
    }
    else if (this.planContainer.nativeElement.contains(event.target)) {
      this.dropdownType = 'plan'
    }
    else if (this.partnerContainer.nativeElement.contains(event.target)) {
      this.dropdownType = 'partner'
    }
    else if (this.accountManagerContainer.nativeElement.contains(event.target)) {
      this.dropdownType = 'accountManager'
    }
    else {
      this.dropdownType = ''
    }
  }
}
