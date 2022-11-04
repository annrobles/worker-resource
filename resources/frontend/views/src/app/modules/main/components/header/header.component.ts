import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserAccessType } from "../../../../models/user-access-type.enum";

@UntilDestroy()
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {

  userAccessType = UserAccessType;
  userType: number =  UserAccessType.None;

  mainNavItems = [
    {name: "Home", link: "/dashboard/user-profile/basic-info", active: true},
    {name: "Company", link: "/company", active: false},
    {name: "Candidates", link: "/student-list", active: false}
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userType = UserAccessType.Admin;
  }

  ngOnDestroy(){
  }

  navigateTo(route: {name: string, link: string, active: boolean}) {
    this.router.navigateByUrl(route.link);
    this.mainNavItems.map((item) => {
      item.active = route.name == item.name ? true : false;
    })
  }

}
