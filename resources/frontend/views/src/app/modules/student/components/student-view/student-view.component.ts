import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserAccessType } from "../../../../models/user-access-type.enum";
@UntilDestroy()
@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.less']
})
export class StudentViewComponent implements OnInit, OnDestroy {

  userAccessType = UserAccessType;
  userType: number =  UserAccessType.None;

  showAddCompanyButton: boolean = false;
  showAddApplicantButton: boolean = false;

  constructor(
    private router: Router
  ) {
    this.userType = parseInt(localStorage.getItem("userType") || "");

    if (this.userType == UserAccessType.Admin) {
      this.showAddCompanyButton = false;
      this.showAddApplicantButton = true;
    }
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }
}
