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
var apoteker_domain_1 = require("../../../service/domain/apoteker/apoteker.domain");
var apoteker_service_1 = require("../../../service/intercept/apoteker/apoteker.service");
var UnitConverterSite = (function (_super) {
    __extends(UnitConverterSite, _super);
    //Method
    function UnitConverterSite(globalConstant, router, dataService) {
        var _this = _super.call(this, globalConstant, router, dataService) || this;
        _this.data = new apoteker_domain_1.Medicine();
        _this.tempid = "";
        _this.paginationData = new paginationdata_domain_1.PaginationData(0, 5, 1, 10);
        _this.generateConfig("unitconverter");
        var observable = _this.fetchPage(0, 10, null, "");
        _this.self = _this;
        return _this;
    }
    UnitConverterSite.prototype.ngOnChanges = function (changes) {
        this.filterDataNew(this.data.id);
    };
    UnitConverterSite.prototype.ngOnInit = function () {
        var observable = this.fetchPage(0, 10, null, this.data.id);
    };
    UnitConverterSite.prototype.filterData = function () {
        this.fetchPage(0, 10, null, this.data.id);
        this.paginationData = new paginationdata_domain_1.PaginationData(0, 5, 1, 10);
    };
    UnitConverterSite.prototype.filterDataNew = function (id) {
        this.fetchPage(0, 10, null, id);
        this.paginationData = new paginationdata_domain_1.PaginationData(0, 5, 1, 10);
    };
    UnitConverterSite.prototype.fetchPage = function (pageNumber, pageSize, sort, filter1, filter2, filter3, filter4, filter5) {
        var _this = this;
        if (filter1 === void 0) { filter1 = null; }
        if (filter2 === void 0) { filter2 = null; }
        if (filter3 === void 0) { filter3 = null; }
        if (filter4 === void 0) { filter4 = null; }
        if (filter5 === void 0) { filter5 = null; }
        var observable = this.dataService.getMedicineUnitConverterAllTable(pageNumber, pageSize, sort, filter1);
        observable.subscribe(function (dataPage) {
            _this.dataPage = dataPage;
        });
        return observable;
    };
    UnitConverterSite.prototype.delete = function (data) {
        alert("Delete" + data);
    };
    UnitConverterSite.prototype.submitClick = function () {
        this.tempid = "";
        this.filterDataNew(this.data.id);
    };
    UnitConverterSite.prototype.detailNew = function (id) {
        this.tempid = id;
    };
    Object.defineProperty(UnitConverterSite.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.dataPage); },
        enumerable: true,
        configurable: true
    });
    return UnitConverterSite;
}(list_helper_1.ListHelper));
__decorate([
    core_1.Input(),
    __metadata("design:type", apoteker_domain_1.Medicine)
], UnitConverterSite.prototype, "data", void 0);
UnitConverterSite = __decorate([
    core_1.Component({
        selector: "unit-convert",
        templateUrl: './unitconvert.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.Router, apoteker_service_1.ApotekerService])
], UnitConverterSite);
exports.UnitConverterSite = UnitConverterSite;
//# sourceMappingURL=unitconvert.site.js.map