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
var maintenance_domain_1 = require("../../../service/domain/maintenance/maintenance.domain");
var maintenance_service_1 = require("../../../service/intercept/maintenance/maintenance.service");
var PatientModifySite = (function (_super) {
    __extends(PatientModifySite, _super);
    function PatientModifySite(globalConstant, route, router, dataService, dataService_extra, dataService_room) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataService_extra = dataService_extra;
        _this.dataService_room = dataService_room;
        _this.dataContainer = new patient_domain_1.Patient();
        _this.generateConfig("patient");
        _this.route.params.subscribe(function (params) {
            //get dropdown data
            var observable = _this.dataService_extra.getTitleAllData();
            observable.subscribe(function (data) {
                _this.title = new maintenance_domain_1.Title();
                _this.title = data;
                var observable = _this.dataService_extra.getGenderAllData();
                observable.subscribe(function (data2) {
                    _this.gender = new maintenance_domain_1.Gender();
                    _this.gender = data2;
                    var observable = _this.dataService_extra.getReligionAllData();
                    observable.subscribe(function (data3) {
                        _this.religion = new maintenance_domain_1.Religion();
                        _this.religion = data3;
                        var observable = _this.dataService_extra.getBloodGroupAllData();
                        observable.subscribe(function (data4) {
                            _this.bloodgroup = new maintenance_domain_1.BloodGroup();
                            _this.bloodgroup = data4;
                            var observable = _this.dataService_extra.getInsuranceAllData();
                            observable.subscribe(function (data5) {
                                _this.insurance = new maintenance_domain_1.Insurance();
                                _this.insurance = data5;
                                var observable = _this.dataService_room.getRoomCategoryAllData();
                                observable.subscribe(function (data6) {
                                    _this.roomcategory = new room_domain_1.RoomCategory();
                                    _this.roomcategory = data6;
                                });
                            });
                        });
                    });
                });
            });
            if (params['id'] != null) {
                _this.editMode = _this.globalConstant.setEditMode(true);
                _this.newEntry = false;
                _this.dataService.getPatientByID(params['id']).subscribe(function (data) {
                    _this.dataContainer = data;
                    _this.titleid = _this.dataContainer.titleEntity.id;
                    _this.genderid = _this.dataContainer.genderEntity.id;
                    _this.religionid = _this.dataContainer.religionEntity.id;
                    _this.bloodgroupid = _this.dataContainer.bloodGroupEntity.id;
                    _this.insuranceid = _this.dataContainer.insuranceEntity.id;
                    _this.roomcategoryid = _this.dataContainer.roomCategoryEntity.id;
                });
            }
            else {
                _this.editMode = _this.globalConstant.setEditMode(false);
                _this.newEntry = true;
            }
        });
        return _this;
    }
    PatientModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientRecord(this.dataContainer);
        }
        else {
            observable = this.dataService.updatePatientRecord(this.dataContainer);
        }
        observable.subscribe(function (data) {
            if (_this.newEntry) {
                alert("Berhasil insert, reference number : " + data.refnopatient);
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
    PatientModifySite.prototype.getValueTitle = function (id) {
        this.titleid = id;
        return this.title.find(function (x) { return x.id === id; });
    };
    PatientModifySite.prototype.getValuegender = function (id) {
        this.genderid = id;
        return this.gender.find(function (x) { return x.id === id; });
    };
    PatientModifySite.prototype.getValuereligion = function (id) {
        this.religionid = id;
        return this.religion.find(function (x) { return x.id === id; });
    };
    PatientModifySite.prototype.getValuerbloodgroup = function (id) {
        this.bloodgroupid = id;
        return this.bloodgroup.find(function (x) { return x.id === id; });
    };
    PatientModifySite.prototype.getValuerinsurance = function (id) {
        this.insuranceid = id;
        return this.insurance.find(function (x) { return x.id === id; });
    };
    PatientModifySite.prototype.getValuerroomcategory = function (id) {
        this.roomcategoryid = id;
        return this.roomcategory.find(function (x) { return x.id === id; });
    };
    return PatientModifySite;
}(edit_helper_1.EditHelper));
PatientModifySite = __decorate([
    core_1.Component({
        templateUrl: './PatientModify.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, patient_service_1.PatientService, maintenance_service_1.MaintenanceService, room_service_1.RoomService])
], PatientModifySite);
exports.PatientModifySite = PatientModifySite;
//# sourceMappingURL=patientModify.site.js.map