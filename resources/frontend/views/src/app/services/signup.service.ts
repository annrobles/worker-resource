import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MainService } from "./main.service";

@Injectable()
export class SignupService extends MainService {
  endpoint: string;

  constructor(
    http: HttpClient) {
        super(http);
        this.endpoint = 'api/signup';
    }

  signup(signupBody: any) {
    console.log("signupBody ", signupBody);
    return this.post(`${this.endpoint}`, signupBody).pipe();
  }
}



