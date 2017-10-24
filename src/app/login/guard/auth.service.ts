import { Injectable }   from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/Rx';

import {
  Router
}                           from '@angular/router';

import { TokenService } from "../../service/token/token.service";

import { 
  Functionality
}                                                           from '../../service/domain/functionality/functionality.domain';

/* ServiceHelper module */
import { HelperService }                                    from '../../service/helper/helper.service';

import { globalIntercept }                                  from '../../service/intercept/globalIntercept';

@Injectable()
export class AuthService extends globalIntercept{
  isLoggedIn: boolean = false;

  private urlLogin: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private tokenService: TokenService, private http: Http, helperService: HelperService, private router: Router) {
    super(helperService);
    this.urlLogin = this.helperService.serviceUrl + "oauth/token";
  }

  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({ headers: headers });
    
    let params = new URLSearchParams();
    params.append('grant_type', "password");  
    params.append('client_id', "RSSYS-Server");
    params.append('client_secret', "hishusada123@");
    params.append('username', username);
    params.append('password', password);                             

    return this.http.post(this.urlLogin, params.toString(), options).map(this.extractData)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
  }

  getUserDetail (ID: string):Observable<Functionality> {
    return this.helperService.getDataById("functionality", ID, "functionality/getListByCdAction");
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  private extractData(res: Response) {
        let body = res.json();    
        return body || { };
    }
}
