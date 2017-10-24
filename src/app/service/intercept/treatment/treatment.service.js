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
var TreatmentService = (function (_super) {
    __extends(TreatmentService, _super);
    function TreatmentService(helperService) {
        var _this = _super.call(this, helperService) || this;
        /* serviceUrl */
        _this.url = "treatment";
        _this.childurl = ["treatmentheader", "treatmentbody", "treatmentdetails"];
        return _this;
    }
    //Treatment Header
    TreatmentService.prototype.getTreatmentHeaderAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    };
    TreatmentService.prototype.getTreatmentHeaderAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    };
    TreatmentService.prototype.getTreatmentHeaderByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    };
    TreatmentService.prototype.saveTreatmentHeaderRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    };
    TreatmentService.prototype.updateTreatmentHeaderRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    };
    //Treatment Body
    TreatmentService.prototype.getTreatmentBodyAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2);
    };
    TreatmentService.prototype.getTreatmentBodyAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    };
    TreatmentService.prototype.getTreatmentBodyByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    };
    TreatmentService.prototype.saveTreatmentBodyRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    };
    TreatmentService.prototype.updateTreatmentBodyRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    };
    //Treatment Details
    TreatmentService.prototype.getTreatmentDetailsAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, this.childurl[2] + "/getTableAction", filter1, filter2);
    };
    TreatmentService.prototype.getTreatmentDetailsAllData = function () {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    };
    TreatmentService.prototype.getTreatmentDetailsByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    };
    TreatmentService.prototype.saveTreatmentDetailsRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    };
    TreatmentService.prototype.updateTreatmentDetailsRecord = function (body) {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    };
    //Additional
    TreatmentService.prototype.getTreatmentBodyByHeaderId = function (ID) {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByHeaderIdAction");
    };
    return TreatmentService;
}(globalIntercept_1.globalIntercept));
TreatmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [helper_service_1.HelperService])
], TreatmentService);
exports.TreatmentService = TreatmentService;
//# sourceMappingURL=treatment.service.js.map