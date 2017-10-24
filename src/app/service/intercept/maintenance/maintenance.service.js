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
var MaintenanceService = (function (_super) {
    __extends(MaintenanceService, _super);
    function MaintenanceService(helperService) {
        var _this = _super.call(this, helperService) || this;
        /* serviceUrl */
        _this.url = "maintenance";
        _this.childurl = ["title", "bloodgroup", "gender", "religion", "insurance", "unit"];
        return _this;
    }
    //Room Category
    MaintenanceService.prototype.getTitleAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[0] + "/getTableAction");
    };
    MaintenanceService.prototype.getTitleAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    };
    MaintenanceService.prototype.getTitleByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveTitleRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    };
    MaintenanceService.prototype.updateTitleRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    };
    //Golongan Darah
    MaintenanceService.prototype.getBloodGroupAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[1] + "/getTableAction");
    };
    MaintenanceService.prototype.getBloodGroupAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    };
    MaintenanceService.prototype.getBloodGroupByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveBloodGroupRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    };
    MaintenanceService.prototype.updateBloodGroupRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    };
    //Gender
    MaintenanceService.prototype.getGenderAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[2] + "/getTableAction");
    };
    MaintenanceService.prototype.getGenderAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    };
    MaintenanceService.prototype.getGenderByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveGenderRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    };
    MaintenanceService.prototype.updateGenderRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    };
    //Religion
    MaintenanceService.prototype.getReligionAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[3] + "/getTableAction");
    };
    MaintenanceService.prototype.getReligionAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[3] + "/getListAction");
    };
    MaintenanceService.prototype.getReligionByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[3] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveReligionRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/saveAction");
    };
    MaintenanceService.prototype.updateReligionRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/updateAction");
    };
    //Insurance
    MaintenanceService.prototype.getInsuranceAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[4] + "/getTableAction");
    };
    MaintenanceService.prototype.getInsuranceAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[4] + "/getListAction");
    };
    MaintenanceService.prototype.getInsuranceByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[4] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveInsuranceRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/saveAction");
    };
    MaintenanceService.prototype.updateInsuranceRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/updateAction");
    };
    //Unit
    MaintenanceService.prototype.getUnitAllTable = function (page, pageSize, sort) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[5] + "/getTableAction");
    };
    MaintenanceService.prototype.getUnitAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[5] + "/getListAction");
    };
    MaintenanceService.prototype.getUnitByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[5] + "/getListByIdAction");
    };
    MaintenanceService.prototype.saveUnitRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[5] + "/saveAction");
    };
    MaintenanceService.prototype.updateUnitRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[5] + "/updateAction");
    };
    return MaintenanceService;
}(globalIntercept_1.globalIntercept));
MaintenanceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [helper_service_1.HelperService])
], MaintenanceService);
exports.MaintenanceService = MaintenanceService;
//# sourceMappingURL=maintenance.service.js.map