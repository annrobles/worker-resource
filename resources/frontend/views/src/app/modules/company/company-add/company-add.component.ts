import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../../models/company.model';
import { CompanyStatus } from '../../../models/company-status.enum';

@UntilDestroy()
@Component({
  selector: 'company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.less']
})
export class CompanyAddComponent implements OnInit, OnDestroy {

  CompanyStatus = CompanyStatus;
  company:Company = {
    id: 0,
    name: "",
    about: "",
    link: "",
    email: "",
    contact_number: "",
    status: CompanyStatus.New,
    availability: {
      morning: false,
      afternoon: false,
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

  onCompanyAdded(eventData: { company: Company }) {
    console.log("company ", eventData.company);
  }

}
