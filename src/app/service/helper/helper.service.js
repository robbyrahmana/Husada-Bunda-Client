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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/publish");
var HelperService = (function () {
    //public serviceUrl: string = "http://localhost:8080/REM/";
    function HelperService(http) {
        this.http = http;
        this.serviceUrl = "http://hishusada1.com//REM-V.1.0.0/";
    }
    HelperService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HelperService.prototype.getDataTable = function (url, page, pageSize, sort, temp, filter1, filter2, filter3, filter4, filter5) {
        if (temp === void 0) { temp = "getDataTable"; }
        if (filter1 === void 0) { filter1 = null; }
        if (filter2 === void 0) { filter2 = null; }
        if (filter3 === void 0) { filter3 = null; }
        if (filter4 === void 0) { filter4 = null; }
        if (filter5 === void 0) { filter5 = null; }
        var params = new http_1.URLSearchParams();
        if (filter1 != null)
            params.set('filter1', "" + filter1);
        if (filter2 != null)
            params.set('filter2', "" + filter2);
        if (filter3 != null)
            params.set('filter3', "" + filter3);
        if (filter4 != null)
            params.set('filter4', "" + filter4);
        if (filter5 != null)
            params.set('filter5', "" + filter5);
        params.set('size', "" + pageSize);
        params.set('page', "" + page);
        if (sort != null) {
            params.set('sort', sort.property + "," + sort.direction);
        }
        var options = new http_1.RequestOptions({
            search: params
        });
        return this.http.get("" + this.serviceUrl + url + "/" + temp, options)
            .map(this.extractData);
    };
    HelperService.prototype.getAllData = function (url, temp) {
        if (temp === void 0) { temp = "getAll"; }
        return this.http.get("" + this.serviceUrl + url + "/" + temp).map(this.extractData).publish().refCount();
    };
    HelperService.prototype.getDataById = function (url, id, temp) {
        if (temp === void 0) { temp = "get"; }
        return this.http.get("" + this.serviceUrl + url + "/" + temp + "/" + id).map(this.extractData).publish().refCount();
    };
    HelperService.prototype.postAllData = function (url, body, temp) {
        if (temp === void 0) { temp = "getAll"; }
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post("" + this.serviceUrl + url + "/" + temp, bodyString, options) // ...using post request
            .map(this.extractData) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); }); //...errors if any
    };
    HelperService.prototype.deleteData = function (url, id) {
        return this.http.delete("" + this.serviceUrl + url + "/delete/" + id);
    };
    return HelperService;
}());
HelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HelperService);
exports.HelperService = HelperService;
//# sourceMappingURL=helper.service.js.map