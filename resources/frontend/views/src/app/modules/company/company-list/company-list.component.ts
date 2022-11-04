import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../../models/company.model';
import { CompanyStatus } from '../../../models/company-status.enum';

@UntilDestroy()
@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.less']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  companies:Company[] = [
    {
      id: 2,
      name: "Walmart",
      email: "careers@walmart.com",
      contact_number: "613-555-0102",
      status: CompanyStatus.New,
      created_at: new Date("08-18-2022"),
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      }
    },
    {
      id: 1,
      name: "Telus",
      email: "careers@telus.com",
      contact_number: "613-555-0158",
      status: CompanyStatus.Contacted,
      created_at: new Date("10-28-2022"),
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      }
    },
    {
      id: 1,
      name: "Tim Hortons",
      email: "careers@timhortons.com",
      contact_number: "613-453-0158",
      status: CompanyStatus.Inprogress,
      created_at: new Date("11-01-2022"),
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      }
    }
  ]

  CompanyStatus = CompanyStatus;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

  addCompany() {
    this.router.navigateByUrl('/company/add');
  }

  viewCompany(company: Company) {
    this.router.navigateByUrl('/company/edit');
  }
}
