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
var edit_helper_1 = require("../../../helper/edit/edit.helper");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var globalConstant_1 = require("../../../helper/globalConstant");
var treatment_domain_1 = require("../../../service/domain/treatment/treatment.domain");
var treatment_service_1 = require("../../../service/intercept/treatment/treatment.service");
var TreatmentHeaderModifySite = (function (_super) {
    __extends(TreatmentHeaderModifySite, _super);
    function TreatmentHeaderModifySite(globalConstant, route, router, dataService) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataContainer = new treatment_domain_1.TreatmentHeader();
        _this.showbody = "[{ \"id\": \"true\", \"type\": \"Show\" },{ \"id\": \"false\", \"type\": \"Hide\" }]";
        _this.showbody = JSON.parse(_this.showbody);
        _this.generateConfig("treatmentheader");
        _this.route.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.editMode = _this.globalConstant.setEditMode(true);
                _this.newEntry = false;
                _this.dataService.getTreatmentHeaderByID(params['id']).subscribe(function (data) {
                    _this.dataContainer = data;
                    _this.showbodyid = _this.dataContainer.showbody;
                });
            }
            else {
                _this.editMode = _this.globalConstant.setEditMode(false);
                _this.newEntry = true;
            }
        });
        return _this;
    }
    TreatmentHeaderModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveTreatmentHeaderRecord(this.dataContainer);
        }
        else {
            observable = this.dataService.updateTreatmentHeaderRecord(this.dataContainer);
        }
        observable.subscribe(function (data) {
            if (_this.newEntry) {
                alert("Berhasil insert");
                _this.backToList(_this.moduleName);
            }
            else {
                alert("Berhasil update");
                _this.backToList(_this.moduleName);
            }
        }, function (err) {
            // Log errors if any
            _this.error = err;
        });
    };
    TreatmentHeaderModifySite.prototype.getValue = function (id) {
        this.showbodyid = id;
        return id;
    };
    return TreatmentHeaderModifySite;
}(edit_helper_1.EditHelper));
TreatmentHeaderModifySite = __decorate([
    core_1.Component({
        templateUrl: './treatmentHeaderModify.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, treatment_service_1.TreatmentService])
], TreatmentHeaderModifySite);
exports.TreatmentHeaderModifySite = TreatmentHeaderModifySite;
//# sourceMappingURL=treatmentheaderModify.site.js.map