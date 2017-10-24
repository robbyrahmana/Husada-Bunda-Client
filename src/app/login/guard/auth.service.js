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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var token_service_1 = require("../../service/token/token.service");
var AuthService = (function () {
    function AuthService(tokenService, http) {
        this.tokenService = tokenService;
        this.http = http;
        this.isLoggedIn = false;
        this.serviceUrl = "http://localhost:8080/REM/";
        this.urlLogin = this.serviceUrl + "oauth/token";
    }
    AuthService.prototype.login = function (username, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var params = new http_1.URLSearchParams();
        params.append('grant_type', "password");
        params.append('client_id', "RSSYS-Server");
        params.append('client_secret', "hishusada123@");
        params.append('username', "robby");
        params.append('password', "robby@123");
        return this.http.post(this.urlLogin, params.toString(), options).map(this.extractData)
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        ;
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [token_service_1.TokenService, http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map