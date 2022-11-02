import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserAccessType } from "../../../../models/user-access-type.enum";

@UntilDestroy()
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userAccessType = UserAccessType;
  userType: number =  UserAccessType.None;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userType = UserAccessType.Student;
  }

  ngOnDestroy(){
  }

}
