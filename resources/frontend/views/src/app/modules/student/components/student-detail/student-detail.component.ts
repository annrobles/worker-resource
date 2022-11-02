import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.less']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(){
  }

}
