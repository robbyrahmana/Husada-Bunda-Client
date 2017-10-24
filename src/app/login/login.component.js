"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./guard/auth.service");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = "";
        this.password = "";
        this.loader = false;
        this.loginIndicator = true;
        jQuery('body').addClass('login-content');
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginIndicator = true;
        this.loader = true;
        this.authService.login(this.username, this.password).subscribe(function (data) {
            _this.authService.isLoggedIn = true;
            sessionStorage.setItem("access_token", data.value);
            sessionStorage.setItem("refresh_token", data.refreshToken.value);
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/site';
            // Set our navigation extras object
            // that passes on our global query params and fragment
            var navigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };
            // Redirect the user
            _this.router.navigate([redirect], navigationExtras);
        }, function (error) {
            _this.loginIndicator = false;
            _this.loader = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map