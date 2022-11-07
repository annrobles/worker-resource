import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileInfoType } from "../../models/user-profile-info-type.enum";
import { UserBasicInformation,
  UserLocation,
  UserExperience,
  UserEducation,
  UserLanguage,
  Skill,
  UserSkill } from "../../models/user-profile-interface";

import { StudentService } from "../../services/student.service";

@UntilDestroy()
@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  currentRouteUrl?: string;
  showSkillDropDown = false;
  UserProfileInfoType = UserProfileInfoType;

  userBasicInformation: UserBasicInformation = {
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    title: "",
    availability: {
      morning: false,
      afternoon: false,
      evening: false
    },
    about: ""
  };

  userLocation: UserLocation = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    postal_code: "",
    country: ""
  }

  userExperience: UserExperience = {
    title: "",
    company_name: "",
    start_date: "",
    end_date: "",
    location: "",
    description: ""
  }

  userEducation: UserEducation = {
    name: "",
    degree: "",
    field_study: "",
    start_date: "",
    end_date: "",
    grade: "",
    description: ""
  }

  userLanguage: UserLanguage = {
    language: {
      english: false,
      french: false,
      other_specify: false
    },
    other_specify: ""
  }

  newSkill: UserSkill = {
    id: 0,
    name: "",
    total_years_experience: 0
  }

  systemSkills: Skill[] = [
    {id: 1, name: "Java"},
    {id: 2, name: "JavaScript"},
    {id: 7, name: "JQuery"},
    {id: 3, name: "Swift"},
    {id: 4, name: "PHP"},
    {id: 5, name: "C++"},
    {id: 6, name: "Phython"}
  ]

  profileSkills: UserSkill[] = [];

  filteredSystemSkills: Skill[] = this.systemSkills;

  constructor(
    private router: Router,
    private studentSvc: StudentService
  ) {
    this.currentRouteUrl = router.url;
   }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  userProfileSubmit(data: UserBasicInformation |   UserLocation | UserExperience | UserEducation | UserLanguage, profileType: UserProfileInfoType) {
    let userInfo = JSON.parse(localStorage.getItem("user") || "");

    data.user_id = userInfo.id;

    switch (profileType) {
      case UserProfileInfoType.Location: {
        break
      }
      case UserProfileInfoType.Skills: {
        break
      }
      case UserProfileInfoType.Experience: {
        break
      }
      case UserProfileInfoType.Education: {
        break
      }
      case UserProfileInfoType.Languages: {
        break
      }
      case UserProfileInfoType.Documents: {
        break
      }
      case UserProfileInfoType.Agreements: {
        break
      }
      default: {
        this.studentSvc.add(data).subscribe((result) => {
          console.log("result ", result);
          this.userBasicInformation = result.student;
        });
        break
      }
    }
  }

  filterSkill(str: string) {
    if (str == "") {
      this.filteredSystemSkills = this.systemSkills;
      this.showSkillDropDown = false;
    }
    else {
      this.showSkillDropDown = true;
    }

    this.filteredSystemSkills = this.filteredSystemSkills.filter((skill) => {
      let skillName = (skill.name).toLowerCase();
      return skillName.startsWith(str.toLowerCase());
    });
  }

  selectSkill(skill: Skill) {
    this.newSkill.name = skill.name;
    this.newSkill.skillset_id = skill.id;
    this.showSkillDropDown = false;
  }

  addSkill() {
    this.profileSkills.push({
      skillset_id: this.newSkill.skillset_id,
      name: this.newSkill.name,
      total_years_experience: this.newSkill.total_years_experience
    });

    this.newSkill = {
      id: 0,
      name: "",
      total_years_experience: 0
    }
  }

  deleteSkill(profileSkill: UserSkill) {

  }

}
