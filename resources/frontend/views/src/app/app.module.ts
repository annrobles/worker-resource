import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyAddComponent } from "./modules/company/company-add/company-add.component";
import { CompanyDetailComponent } from "./modules/company/company-detail/company-detail.component";
import { CompanyEditComponent } from "./modules/company/company-edit/company-edit.component";
import { CompanyListComponent } from "./modules/company/company-list/company-list.component";
import { DashboardComponent } from "./modules/main/components/dashboard/dashboard.component";
import { HeaderComponent } from "./modules/main/components/header/header.component";
import { SigninComponent } from "./modules/main/components/signin/signin.component";
import { SignupComponent } from './modules/main/components/signup/signup.component';
import { StudentDetailComponent } from "./modules/student/components/student-detail/student-detail.component";
import { StudentListComponent } from "./modules/student/components/student-list/student-list.component";
import { StudentViewComponent } from "./modules/student/components/student-view/student-view.component";
import { UserProfileComponent } from "./modules/user-profile/user-profile.component";
import { UserVerificationComponent } from "./modules/main/components/user-verification/user-verification.component";

import { AuthService } from './services/auth.service';
import { HeaderService } from './services/header.service';
import { SigninService } from './services/signin.service';
import { SignupService } from './services/signup.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    StudentDetailComponent,
    CompanyListComponent
  ],
  declarations: [
    AppComponent,
    CompanyAddComponent,
    CompanyEditComponent,
    CompanyDetailComponent,
    CompanyListComponent,
    DashboardComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    StudentDetailComponent,
    StudentListComponent,
    StudentViewComponent,
    UserProfileComponent,
    UserVerificationComponent
  ],
  providers: [
    AuthService,
    HeaderService,
    SigninService,
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
