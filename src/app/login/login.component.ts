import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './guard/auth.service';

import { 
  Functionality
}                                                           from '../service/domain/functionality/functionality.domain';

@Component({
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']
})
export class LoginComponent {

  dataContainer: Functionality = new Functionality();

  username: string = "";
  password: string = "";
  loader: boolean = false;
  loginIndicator: boolean = true;

  result: any;

  constructor(public authService: AuthService, public router: Router) {
    jQuery('body').addClass('login-content');
    if(this.authService.isLoggedIn) {
      this.router.navigate(['/site']);
    } else {
      sessionStorage.clear();
    }
  }

  login() {
    this.loginIndicator = true;
    this.loader = true;

    /*if (this.username == "test" && this.password == "test") {
      let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
      let redirect = '/site';
      this.router.navigate([redirect], navigationExtras);
    } else {
      this.loginIndicator = false;
      this.loader = false;
    }*/
    /*this.authService.login(this.username, this.password).subscribe(data => {
        sessionStorage.setItem("access_token", data.value);
        sessionStorage.setItem("refresh_token", data.refreshToken.value);
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/site';
        let redirect = '/site';
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        this.authService.getUserDetail(this.username).subscribe(data => {
          this.dataContainer = data;
          sessionStorage.setItem("user_access", this.dataContainer.userGroupEntity.id);
          sessionStorage.setItem("user_id", this.dataContainer.id);
          this.authService.isLoggedIn = true;
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        });
    }, error => {
        this.loginIndicator = false;
        this.loader = false;
    });*/

    // For local only
    sessionStorage.setItem("access_token", '1');
    sessionStorage.setItem("refresh_token", '1');

    let redirect = '/site';
    // Set our navigation extras object
    // that passes on our global query params and fragment
    let navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };
    this.authService.getUserDetail(this.username).subscribe(data => {
      this.dataContainer = data;
      sessionStorage.setItem("user_access", this.dataContainer.userGroupEntity.id);
      sessionStorage.setItem("user_id", this.dataContainer.id);
      this.authService.isLoggedIn = true;
      // Redirect the user
      this.router.navigate([redirect], navigationExtras);
    });
  }

  logout() {
    this.authService.logout();
  }
}