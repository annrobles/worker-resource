import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable ,  BehaviorSubject } from 'rxjs';
export abstract class MainService {

  constructor(protected http: HttpClient) { }

  private readonly fallbackURL = 'https://404.corebridge.net/';
  private readonly authorizationHeaderValue = localStorage.getItem("token") || "";

  getAPIBase(route: string = ''): string {
    //let serverLink = this.authSvc.url.serverlinks.find(x => ServerType[x.serverType].toLowerCase() == this._urlName.toLowerCase());
    let serverLink: ServerLink = {url: "http://127.0.0.1:8000/"};

    if (serverLink != null) {
      return serverLink.url + route;
    } else {
      return this.fallbackURL + route;
    }
    return route;
  }

    /**
     * Makes a _POST HTTP request to the base Main API
     *
     * @param {string} route    - The path of the endpoint to be requested
     * @param {any} object      - The model to be used in the body of the request
     */
     public post( route: string, object: any, excluder: ((key: string, value: any) => any) | null = null, options: any | null = null, base: string | null = null): Observable<any> {
      let requestOptions: any = { headers: this.commonStateChangeHeaders()};
      if (options) {
          requestOptions = {...requestOptions, ...options};
      }

      return this.http.post(
          (base !== null ? (base + route) : this.getAPIBase(route)),
          this.serialize(object, excluder),
          requestOptions
      );
  }

  /**
   * Makes a DELETE HTTP request to the base Main API
   *
   * @param {string} route    - The path of the endpoint to be requested
   */
  delete( route: string): Observable<any> {
    return this.http.delete(this.getAPIBase(route), { headers: this.commonStateChangeHeaders()});
  }

  /**
   * Makes a _PUT HTTP request to the base Main API
   *
   * @param {string} route    - The path of the endpoint to be requested
   * @param {any} object      - The model to be used in the body of the request
   */
  put( route: string, object: any, excluder: ((key: string, value: any) => any) | null = null): Observable<any> {
    return this.http.put(this.getAPIBase(route), this.serialize(object, excluder), { headers: this.commonStateChangeHeaders()});
  }

  /**
   * Makes a _GET HTTP request to the base Main API
   *
   * @param {string} route    - The path of the endpoint to be requested
   */
  get(route: string, observe: 'body'|'response' = 'body'): Observable<any> {
    const url = this.getAPIBase() + route;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authorizationHeaderValue}`,
      'Accept': 'application/json'
    });

    if (observe === 'body') {
      return this.http.get(url, {headers: headers});
    } else {
      return this.http.get(url, {headers: headers, observe: 'response', responseType: 'json'});
    }
  }

  private serialize(object: any, excluder: ((key: string, value: any) => any) | null = null): string {
    try {
      return JSON.stringify(object, excluder || undefined);
    } catch (err) {
      throw err;
    }
  }

  commonStateChangeHeaders(contentType: string | null = 'application/json'): HttpHeaders {
    const headerConfig = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.authorizationHeaderValue}`,
    // 'ConnectionID': this.connectionID,
    'Content-Type': ''
    };

    if (contentType) {
    headerConfig['Content-Type'] = contentType;
    }

    return new HttpHeaders(headerConfig);
  }
}

export interface ServerLink {
  url: string;
}
