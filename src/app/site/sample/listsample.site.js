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
var status_service_1 = require("../../service/intercept/status/status.service");
var status_domain_1 = require("../../service/domain/status/status.domain");
var ListSampleSite = (function () {
    //Method
    function ListSampleSite(router, statusService) {
        this.router = router;
        this.statusService = statusService;
        // Variable
        this.tableHeader = ["#", "First Name", "Last Name", "Email", "Nick Name"];
        this.statusDomain = new status_domain_1.StatusDomain("", "", "");
    }
    ListSampleSite.prototype.ngOnInit = function () {
        var _this = this;
        this.statusService.getAllData().subscribe(function (data) {
            _this.statusDomain = data;
        });
    };
    Object.defineProperty(ListSampleSite.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.statusDomain); },
        enumerable: true,
        configurable: true
    });
    return ListSampleSite;
}());
ListSampleSite = __decorate([
    core_1.Component({
        templateUrl: './listsample.site.html',
        providers: [status_service_1.StatusService]
    }),
    __metadata("design:paramtypes", [router_1.Router, status_service_1.StatusService])
], ListSampleSite);
exports.ListSampleSite = ListSampleSite;
//# sourceMappingURL=listsample.site.js.map