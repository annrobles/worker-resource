import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../../models/company.model';
import { CompanyStatus } from '../../../models/company-status.enum';
import { UserAccessType } from "../../../models/user-access-type.enum";

@UntilDestroy()
@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

  @Output() companySubmitted = new EventEmitter<{company: Company}>();
  @Input() isNew: boolean = false;
  @Input() company: Company =  {
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

  CompanyStatus = CompanyStatus;
  companyStatuses: string[] = [];
  showStatusDropDown: boolean = false;
  userType: number =  UserAccessType.None;
  userAccessType = UserAccessType;
  statuses: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // let statuses = Object.keys(CompanyStatus);

    // statuses.forEach((item) => {
    //   if (isNaN(Number(item))) {
    //     this.companyStatuses.push(item.replace(/([A-Z])/g, ' $1').trim());
    //   }
    // });

    this.userType = parseInt(localStorage.getItem("userType") || "");

    this.statuses = [
      {label: 'Unqualified', value: 5},
      {label: 'Qualified', value: 6},
      {label: 'New', value: 1},
      {label: 'Negotiation', value: 7},
      {label: 'Proposal', value: 8},
      {label: 'Contacted', value: 2}
  ]
  }

  ngOnDestroy(){
  }

  companySubmit() {
    this.companySubmitted.emit({ company: this.company });
  }

  statusChanged(statusIndex: number) {
    this.company.status = statusIndex;
    this.showStatusDropDown = false;
  }

}
