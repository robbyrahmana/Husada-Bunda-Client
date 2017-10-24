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
var RoomService = (function (_super) {
    __extends(RoomService, _super);
    function RoomService(helperService) {
        var _this = _super.call(this, helperService) || this;
        /* serviceUrl */
        _this.url = "room";
        return _this;
    }
    //Room Category
    RoomService.prototype.getRoomCategoryAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, "roomcategory/getTableAction", filter1, filter2);
    };
    RoomService.prototype.getRoomCategoryAllData = function () {
        return this.helperService.getAllData(this.url, "roomcategory/getListAction");
    };
    RoomService.prototype.getRoomCategoryByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, "roomcategory/getListByIdAction");
    };
    RoomService.prototype.saveRoomCategoryRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roomcategory/saveAction");
    };
    RoomService.prototype.updateRoomCategoryRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roomcategory/updateAction");
    };
    //Room Detail
    RoomService.prototype.getRoomDetailAllTable = function (page, pageSize, sort, filter1, filter2) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, "roomdetail/getTableAction", filter1, filter2);
    };
    RoomService.prototype.getRoomDetailAllData = function () {
        return this.helperService.getAllData(this.url, "roomdetail/getListAction");
    };
    RoomService.prototype.getRoomDetailByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, "roomdetail/getListByIdAction");
    };
    RoomService.prototype.saveRoomDetailRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roomdetail/saveAction");
    };
    RoomService.prototype.updateRoomDetailRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roomdetail/updateAction");
    };
    //Room Bed
    RoomService.prototype.getRoomBedAllTable = function (page, pageSize, sort, filter1) {
        return this.helperService.getDataTable(this.url, page, pageSize, sort, "roombed/getTableAction", filter1);
    };
    RoomService.prototype.getRoomBedAllData = function () {
        return this.helperService.getAllData(this.url, "roombed/getListAction");
    };
    RoomService.prototype.getRoomBedByID = function (ID) {
        return this.helperService.getDataById(this.url, ID, "roombed/getListByIdAction");
    };
    RoomService.prototype.saveRoomBedRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roombed/saveAction");
    };
    RoomService.prototype.updateRoomBedRecord = function (body) {
        return this.helperService.postAllData(this.url, body, "roombed/updateAction");
    };
    //Additional
    RoomService.prototype.getRoomDetailByCategoryId = function (ID) {
        return this.helperService.getDataById(this.url, ID, "roomdetail/getListByCategoryIdAction");
    };
    RoomService.prototype.getRoomBedByDetailId = function (ID) {
        return this.helperService.getDataById(this.url, ID, "roombed/getListByDetailIdAction");
    };
    RoomService.prototype.getcountRoomByDetail = function () {
        return this.helperService.getAllData(this.url, "roombed/countRoomByDetailIdAction");
    };
    return RoomService;
}(globalIntercept_1.globalIntercept));
RoomService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [helper_service_1.HelperService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map