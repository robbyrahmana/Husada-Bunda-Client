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
var patient_domain_1 = require("../../../service/domain/patient/patient.domain");
var patient_service_1 = require("../../../service/intercept/patient/patient.service");
var functionality_domain_1 = require("../../../service/domain/functionality/functionality.domain");
var functionality_service_1 = require("../../../service/intercept/functionality/functionality.service");
var OPDPatientModifySite = (function (_super) {
    __extends(OPDPatientModifySite, _super);
    function OPDPatientModifySite(globalConstant, route, router, dataService, dataService_extra) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataService_extra = dataService_extra;
        _this.dataContainer = new patient_domain_1.PatientAdministration();
        //child filter
        _this.filter1 = "";
        _this.filter2 = "";
        _this.generateConfig("administration");
        _this.filter1 = "dummy";
        _this.route.params.subscribe(function (params) {
            //get dropdown data
            var observable = _this.dataService_extra.getDeseaseAllData();
            observable.subscribe(function (data) {
                _this.desease = new functionality_domain_1.Desease();
                _this.desease = data;
                var observable = _this.dataService_extra.getDokterAllData();
                observable.subscribe(function (data) {
                    _this.dokter = new functionality_domain_1.Dokter();
                    _this.dokter = data;
                });
            });
            if (params['id'] != null) {
                _this.editMode = _this.globalConstant.setEditMode(true);
                _this.newEntry = false;
                _this.dataService.getPatientAdministrationByID(params['id']).subscribe(function (data) {
                    _this.dataContainer = data;
                    _this.deseaseid = _this.dataContainer.deseaseEntity.id;
                    _this.dokterid = _this.dataContainer.dokterEntity.id;
                });
            }
            else {
                _this.editMode = _this.globalConstant.setEditMode(false);
                _this.newEntry = true;
            }
        });
        return _this;
    }
    OPDPatientModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        this.dataContainer.adminoption = '2';
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientAdministrationRecord(this.dataContainer);
        }
        else {
            observable = this.dataService.updatePatientAdministrationRecord(this.dataContainer);
        }
        observable.subscribe(function (data) {
            if (_this.newEntry) {
                alert("Berhasil insert, registration number : " + data.refnoadministrations);
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
    OPDPatientModifySite.prototype.getValueDesease = function (id) {
        this.deseaseid = id;
        return this.desease.find(function (x) { return x.id === id; });
    };
    OPDPatientModifySite.prototype.getValueDokter = function (id) {
        this.dokterid = id;
        return this.dokter.find(function (x) { return x.id === id; });
    };
    OPDPatientModifySite.prototype.modalSelect = function (data) {
        this.dataContainer.patientEntity = data;
        this.dataContainer.insuranceEntity = this.dataContainer.patientEntity.insuranceEntity;
        this.dataContainer.roomCategoryEntity = this.dataContainer.patientEntity.roomCategoryEntity;
        this.dataContainer.insurancenumber = this.dataContainer.patientEntity.insurancenumber;
        this.nametemp = this.dataContainer.patientEntity.titleEntity.title + " " + this.dataContainer.patientEntity.name;
        this.filter1 = this.dataContainer.patientEntity.refnopatient;
        this.filter2 = this.dataContainer.patientEntity.name;
    };
    return OPDPatientModifySite;
}(edit_helper_1.EditHelper));
OPDPatientModifySite = __decorate([
    core_1.Component({
        templateUrl: './OPDPatient.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, patient_service_1.PatientService, functionality_service_1.FunctionalityService])
], OPDPatientModifySite);
exports.OPDPatientModifySite = OPDPatientModifySite;
//# sourceMappingURL=OPDPatient.site.js.map