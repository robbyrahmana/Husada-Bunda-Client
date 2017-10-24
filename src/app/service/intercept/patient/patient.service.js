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
var PatientService = (function (_super) {
    __extends(PatientService, _super);
    function PatientService(helperService) {
        var _this = _super.call(this, helperService) || this;
        /* serviceUrl */
        _this.url = "patient";
        _this.childurl = ["patient", "patientadministration", "patienttreatment"];
        return _this;
    }
    //Patient
    PatientService.prototype.getPatientAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    };
    PatientService.prototype.getPatientAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    };
    PatientService.prototype.getPatientByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    };
    PatientService.prototype.savePatientRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    };
    PatientService.prototype.updatePatientRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    };
    //PatientAdministration
    PatientService.prototype.getPatientAdministrationAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2);
    };
    PatientService.prototype.getPatientAdministrationAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    };
    PatientService.prototype.getPatientAdministrationByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    };
    PatientService.prototype.savePatientAdministrationRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    };
    //PatientTreatment
    PatientService.prototype.getPatientTreatmentAllTable = function (page, pageSize, sort, filter1, filter2, filter3) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[2] + "/getTableAction", filter1, filter2, filter3);
    };
    PatientService.prototype.getPatientTreatmentAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    };
    PatientService.prototype.getPatientTreatmentByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    };
    PatientService.prototype.savePatientTreatmentRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    };
    return PatientService;
}(globalIntercept_1.globalIntercept));
PatientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [helper_service_1.HelperService])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map