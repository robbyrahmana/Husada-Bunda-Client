"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* Default module */
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
/* ServiceHelper module */
var helper_service_1 = require("../../helper/helper.service");
var globalIntercept_1 = require("../globalIntercept");
var FunctionalityService = (function (_super) {
    __extends(FunctionalityService, _super);
    function FunctionalityService(helperService) {
        var _this = _super.call(this, helperService) || this;
        /* serviceUrl */
        _this.url = "functionality";
        _this.childurl = ["desease", "dokter", "employee"];
        return _this;
    }
    //Desease
    FunctionalityService.prototype.getDeseaseAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    };
    FunctionalityService.prototype.getDeseaseAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    };
    FunctionalityService.prototype.getDeseaseByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    };
    FunctionalityService.prototype.saveDeseaseRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    };
    FunctionalityService.prototype.updateDeseaseRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    };
    //Dokter
    FunctionalityService.prototype.getDokterAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2);
    };
    FunctionalityService.prototype.getDokterAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    };
    FunctionalityService.prototype.getDokterByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    };
    FunctionalityService.prototype.saveDokterRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    };
    FunctionalityService.prototype.updateDokterRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    };
    //Employee
    FunctionalityService.prototype.getEmployeeAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[2] + "/getTableAction", filter1, filter2);
    };
    FunctionalityService.prototype.getEmployeeAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    };
    FunctionalityService.prototype.getEmployeeByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    };
    FunctionalityService.prototype.saveEmployeeRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    };
    FunctionalityService.prototype.updateEmployeeRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    };
    return FunctionalityService;
}(globalIntercept_1.globalIntercept));
FunctionalityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [helper_service_1.HelperService])
], FunctionalityService);
exports.FunctionalityService = FunctionalityService;
//# sourceMappingURL=functionality.service.js.map