import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'user-verification',
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.less']
})
export class UserVerificationComponent implements OnInit, OnDestroy {

  email?: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

  confirmEmailClick() {

  }

}
