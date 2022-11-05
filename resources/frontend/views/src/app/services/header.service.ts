
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {
  isHeaderVisible: boolean = false;

  headerVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
    this.headerVisibilityChange.subscribe((value) => {
      this.isHeaderVisible = value
    });
  }

  toggleHeaderVisibility(isHeaderVisible: boolean) {
    this.headerVisibilityChange.next(isHeaderVisible);
  }
}
