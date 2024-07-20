import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';
import { TallyReleaseModalComponent } from '../tally-release-modal/tally-release-modal.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tally-release',
  standalone: true,
  imports: [TableComponent, CommonModule, TallyReleaseModalComponent, SidebarComponent, NavbarComponent],
  templateUrl: './tally-release.component.html',
  styleUrl: './tally-release.component.css'
})
export class TallyReleaseComponent {

  columnName = [
    'S.No',
    'Version Name',
    'Download Link',
    'Update Link',
    'Action'
  ];

  tallyData = [
    {
      "S.No": 1,
      "Version Name": "Tally_2_1_el",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_2_1_EL.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_2_1_EL.zip",
      "Action": ""
    },
    {
      "S.No": 2,
      "Version Name": "Tallyprime_2_1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_2_1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_2_1.zip",
      "Action": ""
    },
    {
      "S.No": 3,
      "Version Name": "Tallyprime_2_0",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_2_0.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_2_0.zip",
      "Action": ""
    },
    {
      "S.No": 4,
      "Version Name": "Tallyprime_2_0_1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_2_0_1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_2_0_1.zip",
      "Action": ""
    },
    {
      "S.No": 5,
      "Version Name": "Tallyerp9_6_6",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_6.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_6.zip",
      "Action": ""
    },
    {
      "S.No": 6,
      "Version Name": "Tallyerp9_6_5_4",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_5_4.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_5_4.zip",
      "Action": ""
    },
    {
      "S.No": 7,
      "Version Name": "Tallyerp9_6_5",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_5.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_5.zip",
      "Action": ""
    },
    {
      "S.No": 8,
      "Version Name": "Tallyerp9_6_4_9",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_4_9.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_4_9.zip",
      "Action": ""
    },
    {
      "S.No": 9,
      "Version Name": "Tallyerp9_6_4_8",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_4_8.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_4_8.zip",
      "Action": ""
    },
    {
      "S.No": 10,
      "Version Name": "Tallyerp9_6_4_7",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_4_7.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_4_7.zip",
      "Action": ""
    },
    {
      "S.No": 11,
      "Version Name": "Tallyerp9_6_4_3",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_4_3.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_4_3.zip",
      "Action": ""
    },
    {
      "S.No": 12,
      "Version Name": "Tallyerp9_6_4",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_4.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_4.zip",
      "Action": ""
    },
    {
      "S.No": 13,
      "Version Name": "Tallyerp9_6_3_1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_3_1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_3_1.zip",
      "Action": ""
    },
    {
      "S.No": 14,
      "Version Name": "Tallyerp9_6_1_1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_1_1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_1_1.zip",
      "Action": ""
    },
    {
      "S.No": 15,
      "Version Name": "Tallyerp9_5_4_8",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_5_4_8.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_5_4_8.zip",
      "Action": ""
    },
    {
      "S.No": 16,
      "Version Name": "Tally_3.0",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_3.0.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_3.0.zip",
      "Action": ""
    },
    {
      "S.No": 17,
      "Version Name": "Tally_3.0_el",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_3.0_EL.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_3.0_EL.zip",
      "Action": ""
    },
    {
      "S.No": 18,
      "Version Name": "Tallyprime_3_0_1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_3_0_1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_3_0_1.zip",
      "Action": ""
    },
    {
      "S.No": 19,
      "Version Name": "Tallyprime_3_0_1_el",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_3_0_1_EL.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_3_0_1_EL.zip",
      "Action": ""
    },
    {
      "S.No": 20,
      "Version Name": "Tally_4.0",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_4.0.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_4.0.zip",
      "Action": ""
    },
    {
      "S.No": 21,
      "Version Name": "Tally_4.0_el",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_4.0_EL.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_4.0_EL.zip",
      "Action": ""
    },
    {
      "S.No": 22,
      "Version Name": "Tally_4.1",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_4.1.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_4_1.zip",
      "Action": ""
    },
    {
      "S.No": 23,
      "Version Name": "Tally_4.1_el",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyPrime_4.1_EL.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyPrime_4_1_EL.zip",
      "Action": ""
    },
    {
      "S.No": 24,
      "Version Name": "Tallyerp9_6_6_3",
      "Download Link": "https://cloud29.tallywale.com/TallyRelease/PROVISION/TallyERP9_6_6_3.zip",
      "Update Link": "https://cloud29.tallywale.com/TallyRelease/UPDATE/TallyERP9_6_6_3.zip",
      "Action": ""
    }
  ];

  isEdit: any
  newData = {}

  newTallyRelease() {
    this.isEdit = false
  }
}
