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
var apoteker_domain_1 = require("../../../service/domain/apoteker/apoteker.domain");
var apoteker_service_1 = require("../../../service/intercept/apoteker/apoteker.service");
var maintenance_domain_1 = require("../../../service/domain/maintenance/maintenance.domain");
var maintenance_service_1 = require("../../../service/intercept/maintenance/maintenance.service");
var UnitConvertModifySite = (function (_super) {
    __extends(UnitConvertModifySite, _super);
    function UnitConvertModifySite(globalConstant, route, router, dataService, dataService_extra) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataService_extra = dataService_extra;
        _this.id = "";
        _this.data = new apoteker_domain_1.Medicine();
        _this.result = new core_1.EventEmitter();
        _this.dataContainer = new apoteker_domain_1.MedicineUnitConverter();
        _this.generateConfig("unitconverter");
        return _this;
    }
    UnitConvertModifySite.prototype.ngOnChanges = function (changes) {
        this.error = null;
        this.getinitialdata();
    };
    UnitConvertModifySite.prototype.ngOnInit = function () {
        this.getinitialdata();
    };
    UnitConvertModifySite.prototype.getinitialdata = function () {
        var _this = this;
        //get dropdown data
        var observable = this.dataService_extra.getUnitAllData();
        observable.subscribe(function (data) {
            _this.unit = new maintenance_domain_1.Unit();
            _this.unit = data;
        });
        if (this.id != "") {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = false;
            this.dataService.getMedicineUnitConverterByID(this.id).subscribe(function (data) {
                _this.dataContainer = data;
                _this.unitid = _this.dataContainer.unitEntity.id;
            });
        }
        else {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = true;
        }
    };
    UnitConvertModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        this.dataContainer.medicineEntity = this.data;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveMedicineUnitConverterRecord(this.dataContainer);
        }
        else {
            observable = this.dataService.updateMedicineUnitConverterRecord(this.dataContainer);
        }
        observable.subscribe(function (data) {
            if (_this.newEntry) {
                alert("Berhasil insert");
            }
            else {
                alert("Berhasil update");
            }
            _this.dataContainer.unitEntity = null;
            _this.unitid = "";
            _this.dataContainer.quantity = "";
            _this.dataContainer.price = "";
            _this.result.emit();
        }, function (err) {
            // Log errors if any
            _this.error = err;
        });
    };
    UnitConvertModifySite.prototype.getValueUnit = function (id) {
        this.unitid = id;
        return this.unit.find(function (x) { return x.id === id; });
    };
    return UnitConvertModifySite;
}(edit_helper_1.EditHelper));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], UnitConvertModifySite.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", apoteker_domain_1.Medicine)
], UnitConvertModifySite.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UnitConvertModifySite.prototype, "result", void 0);
UnitConvertModifySite = __decorate([
    core_1.Component({
        selector: "unit-convert-modify",
        templateUrl: './unitConvertmodify.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, apoteker_service_1.ApotekerService, maintenance_service_1.MaintenanceService])
], UnitConvertModifySite);
exports.UnitConvertModifySite = UnitConvertModifySite;
//# sourceMappingURL=unitconvertModify.site.js.map