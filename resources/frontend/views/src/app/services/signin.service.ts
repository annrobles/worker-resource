import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MainService } from "./main.service";

@Injectable()
export class SigninService extends MainService {
  endpoint: string;

  constructor(
    http: HttpClient) {
        super(http);
        this.endpoint = 'api/signin';
    }

  signin(payload: any) {
    return this.post(`${this.endpoint}`, payload).pipe();
  }
}
