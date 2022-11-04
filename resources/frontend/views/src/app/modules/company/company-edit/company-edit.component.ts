import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../../models/company.model';
import { CompanyStatus } from '../../../models/company-status.enum';

@UntilDestroy()
@Component({
  selector: 'company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.less']
})
export class CompanyEditComponent implements OnInit, OnDestroy {

  CompanyStatus = CompanyStatus;

  company:Company = {
      id: 2,
      name: "Walmart",
      email: "careers@walmart.com",
      contact_number: "613-555-0102",
      status: CompanyStatus.New,
      created_at: new Date("08-18-2022"),
      availability: {
        morning: true,
        afternoon: true,
        evening: false
      }
    }


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }

  onCompanyUpdate(eventData: { company: Company }) {
    console.log("company ", eventData.company);
  }

}
