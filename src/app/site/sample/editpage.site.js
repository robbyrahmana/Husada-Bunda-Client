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
var edit_helper_1 = require("../../helper/edit/edit.helper");
var router_1 = require("@angular/router");
var globalConstant_1 = require("../../helper/globalConstant");
var EditPageSite = (function (_super) {
    __extends(EditPageSite, _super);
    function EditPageSite(globalConstant, route, router) {
        var _this = _super.call(this, globalConstant, route, router, null) || this;
        _this.moduleName = "site";
        _this.pageName = "Sample Edit";
        _this.pageDescription = "Data master for room category in your hospital";
        _this.date = new Date(2017, 5 - 1, 15);
        _this.text = "sample text";
        _this.dropvalue = "5002";
        _this.radio = "5002";
        _this.checkbox = "[{ \"id\": \"5002\", \"type\": \"Glazed\" },{ \"id\": \"5005\", \"type\": \"Sugar\" }]";
        _this.json = "[{ \"id\": \"5001\", \"type\": \"None\" },{ \"id\": \"5002\", \"type\": \"Glazed\" },{ \"id\": \"5005\", \"type\": \"Sugar\" }]";
        _this.checkbox = JSON.parse(_this.checkbox);
        return _this;
    }
    EditPageSite.prototype.submit = function () { };
    return EditPageSite;
}(edit_helper_1.EditHelper));
EditPageSite = __decorate([
    core_1.Component({
        templateUrl: './editpage.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router])
], EditPageSite);
exports.EditPageSite = EditPageSite;
//# sourceMappingURL=editpage.site.js.map