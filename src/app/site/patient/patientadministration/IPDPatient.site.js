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
var room_domain_1 = require("../../../service/domain/room/room.domain");
var room_service_1 = require("../../../service/intercept/room/room.service");
var functionality_domain_1 = require("../../../service/domain/functionality/functionality.domain");
var functionality_service_1 = require("../../../service/intercept/functionality/functionality.service");
var IPDPatientModifySite = (function (_super) {
    __extends(IPDPatientModifySite, _super);
    function IPDPatientModifySite(globalConstant, route, router, dataService, dataService_extra, dataService_room) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataService_extra = dataService_extra;
        _this.dataService_room = dataService_room;
        _this.dataContainer = new patient_domain_1.PatientAdministration();
        //child filter
        _this.filter1 = "";
        _this.filter2 = "";
        _this.filter1 = "dummy";
        _this.generateConfig("administration");
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
                    _this.roombedid = _this.dataContainer.roomBedEntity.id;
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
    IPDPatientModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        this.dataContainer.adminoption = '1';
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
    IPDPatientModifySite.prototype.getRoomBed = function (id) {
        var _this = this;
        var observable = this.dataService_room.getRoomBedByDetailId(id);
        observable.subscribe(function (data) {
            _this.roombed = new room_domain_1.RoomBed();
            _this.roombed = data;
        });
    };
    IPDPatientModifySite.prototype.getValueRoomBed = function (id) {
        this.roombedid = id;
        return this.roombed.find(function (x) { return x.id === id; });
    };
    IPDPatientModifySite.prototype.getValueDesease = function (id) {
        this.deseaseid = id;
        return this.desease.find(function (x) { return x.id === id; });
    };
    IPDPatientModifySite.prototype.getValueDokter = function (id) {
        this.dokterid = id;
        return this.dokter.find(function (x) { return x.id === id; });
    };
    IPDPatientModifySite.prototype.modalSelect = function (data) {
        var _this = this;
        this.dataContainer.patientEntity = data;
        this.dataContainer.insuranceEntity = this.dataContainer.patientEntity.insuranceEntity;
        this.dataContainer.roomCategoryEntity = this.dataContainer.patientEntity.roomCategoryEntity;
        this.dataContainer.insurancenumber = this.dataContainer.patientEntity.insurancenumber;
        this.filter1 = this.dataContainer.patientEntity.refnopatient;
        this.filter2 = this.dataContainer.patientEntity.name;
        //Get room by insurance
        var observable = this.dataService_room.getRoomDetailByCategoryId(this.dataContainer.patientEntity.roomCategoryEntity.id);
        observable.subscribe(function (data) {
            _this.roomdetail = new room_domain_1.RoomDetail();
            _this.roomdetail = data;
        });
        this.nametemp = this.dataContainer.patientEntity.titleEntity.title + " " + this.dataContainer.patientEntity.name;
    };
    return IPDPatientModifySite;
}(edit_helper_1.EditHelper));
IPDPatientModifySite = __decorate([
    core_1.Component({
        templateUrl: './IPDPatient.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, patient_service_1.PatientService, functionality_service_1.FunctionalityService, room_service_1.RoomService])
], IPDPatientModifySite);
exports.IPDPatientModifySite = IPDPatientModifySite;
//# sourceMappingURL=IPDPatient.site.js.map