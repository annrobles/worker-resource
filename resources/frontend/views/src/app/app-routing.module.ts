import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyAddComponent } from "./modules/company/company-add/company-add.component";
import { CompanyEditComponent } from "./modules/company/company-edit/company-edit.component";
import { CompanyListComponent } from "./modules/company/company-list/company-list.component";
import { DashboardComponent } from "./modules/main/components/dashboard/dashboard.component";
import { SigninComponent } from "./modules/main/components/signin/signin.component";
import { SignupComponent } from './modules/main/components/signup/signup.component';
import { StudentDetailComponent } from "./modules/student/components/student-detail/student-detail.component";
import { StudentListComponent } from "./modules/student/components/student-list/student-list.component";
import { StudentViewComponent } from "./modules/student/components/student-view/student-view.component";
import { UserProfileComponent } from "./modules/user-profile/user-profile.component";
import { UserVerificationComponent } from "./modules/main/components/user-verification/user-verification.component";

const routes: Routes = [
  {
    path: '',
    data: { frameless: true },
    component: SigninComponent
  },
  {
    path: 'company',
    data: { frameless: true },
    component: CompanyListComponent
  },
  {
    path: 'company/add',
    data: { frameless: true },
    component: CompanyAddComponent
  },
  {
    path: 'company/edit',
    data: { frameless: true },
    component: CompanyEditComponent
  },
  {
    path: 'dashboard',
    data: { frameless: true },
    component: DashboardComponent,
    children: [
      {
        path: 'user-profile',
        children: [
          {
            path: 'basic-info',
            component: UserProfileComponent
          },
          {
            path: 'location',
            component: UserProfileComponent
          },
          {
            path: 'skills',
            component: UserProfileComponent
          },
          {
            path: 'experience',
            component: UserProfileComponent
          },
          {
            path: 'education',
            component: UserProfileComponent
          },
          {
            path: 'languages',
            component: UserProfileComponent
          },
          {
            path: 'documents',
            component: UserProfileComponent
          },
          {
            path: 'agreements',
            component: UserProfileComponent
          }
        ]
      }
    ]
  },
  {
    path: 'signup',
    data: { frameless: true },
    component: SignupComponent
  },
  {
    path: 'student-detail',
    data: { frameless: true },
    component: StudentDetailComponent
  },
  {
    path: 'student-list',
    data: { frameless: true },
    component: StudentListComponent
  },
  {
    path: 'student-view',
    data: { frameless: true },
    component: StudentViewComponent
  },
  {
    path: 'user-verification',
    data: { frameless: true },
    component: UserVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
