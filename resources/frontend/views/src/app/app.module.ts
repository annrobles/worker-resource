import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./modules/main/components/dashboard/dashboard.component";
import { SigninComponent } from "./modules/main/components/signin/signin.component";
import { SignupComponent } from './modules/main/components/signup/signup.component';
import { StudentDetailComponent } from "./modules/student/components/student-detail/student-detail.component";
import { UserVerificationComponent } from "./modules/main/components/user-verification/user-verification.component";

import { SignupService } from './services/signup.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    StudentDetailComponent
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SigninComponent,
    SignupComponent,
    StudentDetailComponent,
    UserVerificationComponent
  ],
  providers: [
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
