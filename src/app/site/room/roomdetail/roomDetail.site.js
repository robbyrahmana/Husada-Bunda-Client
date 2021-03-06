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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var list_helper_1 = require("../../../helper/list/list.helper");
var globalConstant_1 = require("../../../helper/globalConstant");
var paginationdata_domain_1 = require("../../../components/table/paginationdata.domain");
var room_service_1 = require("../../../service/intercept/room/room.service");
var countDomain_1 = require("../../../service/domain/countDomain");
var RoomDetailSite = (function (_super) {
    __extends(RoomDetailSite, _super);
    //Method
    function RoomDetailSite(globalConstant, router, dataService) {
        var _this = _super.call(this, globalConstant, router, dataService) || this;
        _this.paginationData = new paginationdata_domain_1.PaginationData(0, 5, 1, 10);
        //Filter purpose
        _this.filter1 = "";
        _this.filter2 = "";
        _this.roomcount = null;
        _this.generateConfig("roomdetail");
        var observable = _this.fetchPage(0, 10, null, "", "");
        _this.self = _this;
        return _this;
    }
    RoomDetailSite.prototype.filterData = function () {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new paginationdata_domain_1.PaginationData(0, 5, 1, 10);
    };
    RoomDetailSite.prototype.fetchPage = function (pageNumber, pageSize, sort, filter1, filter2, filter3, filter4, filter5) {
        var _this = this;
        if (filter1 === void 0) { filter1 = null; }
        if (filter2 === void 0) { filter2 = null; }
        if (filter3 === void 0) { filter3 = null; }
        if (filter4 === void 0) { filter4 = null; }
        if (filter5 === void 0) { filter5 = null; }
        var observable = this.dataService.getRoomDetailAllTable(pageNumber, pageSize, sort, filter1, filter2);
        observable.subscribe(function (dataPage) {
            var observable = _this.dataService.getcountRoomByDetail();
            observable.subscribe(function (data) {
                _this.dataPage = dataPage;
                _this.roomcount = new countDomain_1.CountDomain();
                _this.roomcount = data;
            });
        });
        return observable;
    };
    RoomDetailSite.prototype.getCount = function (id) {
        var data = this.roomcount.find(function (x) { return x.id === id; });
        return data.count;
    };
    RoomDetailSite.prototype.delete = function (data) {
        alert("Delete" + data);
    };
    Object.defineProperty(RoomDetailSite.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.dataPage); },
        enumerable: true,
        configurable: true
    });
    return RoomDetailSite;
}(list_helper_1.ListHelper));
RoomDetailSite = __decorate([
    core_1.Component({
        templateUrl: './roomDetail.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.Router, room_service_1.RoomService])
], RoomDetailSite);
exports.RoomDetailSite = RoomDetailSite;
//# sourceMappingURL=roomdetail.site.js.map