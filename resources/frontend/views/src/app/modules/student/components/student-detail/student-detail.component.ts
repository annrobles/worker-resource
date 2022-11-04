import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileNavItem } from "../../../../models/user-profile-interface";

@UntilDestroy()
@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.less']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  userProfileNavItems = [
    {name: "Basic Information", link: "/dashboard/user-profile/basic-info", active: true},
    {name: "Location", link: "/dashboard/user-profile/location", active: false},
    {name: "Skills", link: "/dashboard/user-profile/skills", active: false},
    {name: "Experience", link: "/dashboard/user-profile/experience", active: false},
    {name: "Education", link: "/dashboard/user-profile/education", active: false},
    {name: "Languages", link: "/dashboard/user-profile/languages", active: false},
    {name: "Documents", link: "/dashboard/user-profile/documents", active: false},
    {name: "Agreements", link: "/dashboard/user-profile/agreements", active: false}
  ];

  studentDetailHeader: string = "";

  constructor(
    private router: Router
  ) {
    this.studentDetailHeader = "Basic Information";
  }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  navItemClick(selectedItem: UserProfileNavItem) {
    this.router.navigateByUrl(selectedItem.link);
    this.userProfileNavItems.map((item) => {
      item.active = selectedItem.name == item.name ? true : false;
    })
  }

}

