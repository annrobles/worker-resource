import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  signupClick() {
    this.router.navigateByUrl('/signup');
  }

  signinClick() {

  }
}
