import { UntilDestroy } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../../models/student.model';

@UntilDestroy()
@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent implements OnInit, OnDestroy {

  @Input() showRank: boolean = false;
  @Input() containerClass: string = "container";
  @Input() reorderableColumns: boolean = false;

  students:Student[] = [
    {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "janed@gmail.com",
      contact_number: "613-555-0102",
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      },
      rank: 1
    },
    {
      id: 1,
      first_name: "Juan",
      last_name: "Dela Cruz",
      email: "juandc@gmail.com",
      contact_number: "613-555-0158",
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      },
      rank: 2
    },
    {
      id: 1,
      first_name: "Tony",
      last_name: "Stark",
      email: "tonys@gmail.com",
      contact_number: "613-453-0158",
      availability: {
        morning: false,
        afternoon: false,
        evening: false
      },
      rank: 3
    }
  ]

  loading: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.students.map((student) => {
      student.name = student.first_name.concat(" " + student.last_name);
    })
  }

  ngOnDestroy(){
  }

  viewStudent(student: Student) {
    this.router.navigateByUrl('/student-view');
  }

  getSearchInputValue(event: any){
    return (event.target as HTMLInputElement).value;
  }
}
