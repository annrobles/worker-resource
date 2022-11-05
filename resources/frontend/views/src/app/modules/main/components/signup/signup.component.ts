import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../../../../services/signup.service'
@UntilDestroy()
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit, OnDestroy {

  password?: string;
  validPassword: boolean = false;

  email?: string;

  loadingOpacity = 0;
  private pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{7,}/;

  constructor(
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  validatePassword() {
    //this.validPassword = this.pwRegex.test(this.password as string);
    this.validPassword = true;
  }

  signupClick() {
    this.signupService.signup({email: this.email, password: this.password, user_type_id: 3}).subscribe((result) => {
      this.router.navigateByUrl('/signin');
    });
  }
}
