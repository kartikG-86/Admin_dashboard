import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { ServerModalComponent } from '../server-modal/server-modal.component';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule, TableComponent, ServerModalComponent],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  isEdit: any = null
  newData = {}
  filterOptions = [{
    type: "Status",
    options: [
      'All',
      'Online',
      'Offline',
    ]
  }, {
    type: "Server",
    options: [
      'Trial Server',
      'Live Server',
      'Marg Server',
      'Partner Server',
    ]
  },]

  columnName = [
    'Name',
    'Domain Name',
    'IP Address',
    'Public IP Address',
    'Type',
    'Exe Last Updated',
    'Status',
    'Action'
  ];

  serverData = [
    {
      "Name": "Cloud83",
      "Domain Name": "https://cloud83.tallywale.com/",
      "IP Address": "193.169.4.220",
      "Public IP Address": "103.155.204.124",
      "Type": "Live",
      "Exe Last Updated": "08/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud88",
      "Domain Name": "https://cloud88.cocloud.in/",
      "IP Address": "193.169.4.214",
      "Public IP Address": "103.155.204.243",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud93",
      "Domain Name": "https://cloud93.cocloud.in/",
      "IP Address": "193.169.4.211",
      "Public IP Address": "103.155.204.229",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud94",
      "Domain Name": "https://cloud94.cocloud.in/",
      "IP Address": "193.169.3.129",
      "Public IP Address": "103.155.204.129",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud1",
      "Domain Name": "https://cloud1.tallywale.com/",
      "IP Address": "193.169.3.153",
      "Public IP Address": "103.155.204.153",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud101",
      "Domain Name": "https://cloud101.cocloud.in/",
      "IP Address": "193.169.3.11",
      "Public IP Address": "103.155.204.12",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud102",
      "Domain Name": "https://cloud102.cocloud.in/",
      "IP Address": "193.169.3.23",
      "Public IP Address": "103.155.204.23",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud103",
      "Domain Name": "https://cloud103.cocloud.in/",
      "IP Address": "193.169.3.27",
      "Public IP Address": "103.155.204.27",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud104",
      "Domain Name": "https://cloud104.cocloud.in/",
      "IP Address": "193.169.3.28",
      "Public IP Address": "103.155.204.29",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud105",
      "Domain Name": "https://cloud105.cocloud.in/",
      "IP Address": "193.169.3.32",
      "Public IP Address": "103.155.204.146",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud106",
      "Domain Name": "https://cloud106.cocloud.in/",
      "IP Address": "193.169.3.149",
      "Public IP Address": "103.155.204.149",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud2",
      "Domain Name": "https://cloud2.tallywale.com/",
      "IP Address": "193.169.3.154",
      "Public IP Address": "103.155.204.154",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud3",
      "Domain Name": "https://cloud3.tallywale.com/",
      "IP Address": "193.169.3.155",
      "Public IP Address": "103.155.204.155",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud4",
      "Domain Name": "https://cloud4.cocloud.in/",
      "IP Address": "193.169.3.156",
      "Public IP Address": "103.155.204.156",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    },
    {
      "Name": "Cloud5",
      "Domain Name": "https://cloud5.tallywale.com/",
      "IP Address": "193.169.3.157",
      "Public IP Address": "103.155.204.157",
      "Type": "Live",
      "Exe Last Updated": "10/07/2024",
      "Status": "Online",
      "Action": ""
    }
  ];

  newServer() {
    this.isEdit = false
    this.newData = {}
  }

}
