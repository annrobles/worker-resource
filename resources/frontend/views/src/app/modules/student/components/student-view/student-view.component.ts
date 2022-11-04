import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../../models/student.model';

@UntilDestroy()
@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.less']
})
export class StudentViewComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(){
  }
}
