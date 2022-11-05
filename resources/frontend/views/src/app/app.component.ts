import { Component } from '@angular/core';
import { UserAccessType } from './models/user-access-type.enum';
import { AuthService } from "./services/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(
    private authService: AuthService
  ) { }

  title = 'Worker Resource';
}
