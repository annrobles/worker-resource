import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./modules/main/components/dashboard/dashboard.component";
import { SigninComponent } from "./modules/main/components/signin/signin.component";
import { SignupComponent } from './modules/main/components/signup/signup.component';
import { StudentDetailComponent } from "./modules/student/components/student-detail/student-detail.component";
import { UserVerificationComponent } from "./modules/main/components/user-verification/user-verification.component";

const routes: Routes = [
  {
    path: '',
    data: { frameless: true },
    component: SigninComponent
  },
  {
    path: 'dashboard',
    data: { frameless: true },
    component: DashboardComponent
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
