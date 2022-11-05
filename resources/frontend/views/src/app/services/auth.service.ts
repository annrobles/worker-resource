import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { UserAccessType } from "../models/user-access-type.enum";

import { MainService } from "./main.service";

@Injectable()
export class AuthService extends MainService {
  endpoint: string;
  user_type: UserAccessType = UserAccessType.None;
  mainNavItems: {name: string, link: string, active: boolean}[] = [];

  userTypeChange: Subject<number> = new Subject<number>();
  mainNavItemsChange: Subject<{name: string, link: string, active: boolean}[]>
  = new Subject<{name: string, link: string, active: boolean}[]>();

  constructor(
    http: HttpClient) {
      super(http);
      this.endpoint = 'auth/register';

      this.userTypeChange.subscribe((value) => {
        this.user_type = value;
      });

      this.mainNavItemsChange.subscribe((value) => {
        this.mainNavItems = value;
      });
    }

  setUserType(user_type: UserAccessType) {
    this.user_type = user_type;
    this.userTypeChange.next(user_type);

    if (this.user_type == UserAccessType.Student) {
      this.mainNavItems = [
        {name: "Home", link: "/dashboard/user-profile/basic-info", active: true},
        {name: "Company", link: "/company", active: false}
      ];
    }

    if (this.user_type == UserAccessType.Admin) {
      this.mainNavItems = [
        {name: "Candidates", link: "/student-list", active: true},
        {name: "Company", link: "/company", active: false},
        //{name: "Jobs", link: "/student-list", active: false}
      ]
    }

    this.mainNavItemsChange.next(this.mainNavItems);
    localStorage.setItem("mainNavItems", `${JSON.stringify(this.mainNavItems)}`);
  }

  getUserType() {
    return this.user_type;
  }
}


