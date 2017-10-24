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
var room_domain_1 = require("../../../service/domain/room/room.domain");
var room_service_1 = require("../../../service/intercept/room/room.service");
var RoomBedModifySite = (function (_super) {
    __extends(RoomBedModifySite, _super);
    function RoomBedModifySite(globalConstant, route, router, dataService) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataContainer = new room_domain_1.RoomBed();
        _this.generateConfig("roombed");
        _this.route.params.subscribe(function (params) {
            //get room category
            var observable = _this.dataService.getRoomCategoryAllData();
            observable.subscribe(function (data) {
                _this.roomcategory = new room_domain_1.RoomCategory();
                _this.roomcategory = data;
            });
            if (params['id'] != null) {
                _this.editMode = _this.globalConstant.setEditMode(true);
                _this.newEntry = false;
                _this.dataService.getRoomBedByID(params['id']).subscribe(function (data) {
                    _this.dataContainer = data;
                    _this.roomCategoryid = _this.dataContainer.roomDetailEntity.roomCategoryEntity.id;
                    //Get Room Detail first load
                    var observable = _this.dataService.getRoomDetailByCategoryId(_this.roomCategoryid);
                    observable.subscribe(function (data1) {
                        _this.roomDetail = new room_domain_1.RoomDetail();
                        _this.roomDetail = data1;
                        _this.roomCategoryid = _this.dataContainer.roomDetailEntity.roomCategoryEntity.id;
                        _this.roomDetailid = _this.dataContainer.roomDetailEntity.id;
                    });
                });
            }
            else {
                _this.editMode = _this.globalConstant.setEditMode(false);
                _this.newEntry = true;
            }
        });
        return _this;
    }
    RoomBedModifySite.prototype.submit = function () {
        var _this = this;
        if (this.roomDetailid != null) {
            this.error = null;
            var observable = void 0;
            if (this.newEntry) {
                delete this.dataContainer.id;
                observable = this.dataService.saveRoomBedRecord(this.dataContainer);
            }
            else {
                observable = this.dataService.updateRoomBedRecord(this.dataContainer);
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
        }
        else {
            this.error = JSON.parse('{ "fieldErrors": [ { "field": "roomDetailEntity", "message": "Field cannot be empty" } ] }');
        }
    };
    RoomBedModifySite.prototype.getValueDetail = function (id) {
        var _this = this;
        this.roomDetail = null;
        this.roomDetailid = null;
        //get room detail by category
        var observable = this.dataService.getRoomDetailByCategoryId(id);
        observable.subscribe(function (data) {
            _this.roomDetail = new room_domain_1.RoomDetail();
            _this.roomDetail = data;
        });
        this.roomCategoryid = id;
        return this.roomcategory.find(function (x) { return x.id === id; });
    };
    RoomBedModifySite.prototype.getValue = function (id) {
        this.roomDetailid = id;
        return this.roomDetail.find(function (x) { return x.id === id; });
    };
    return RoomBedModifySite;
}(edit_helper_1.EditHelper));
RoomBedModifySite = __decorate([
    core_1.Component({
        templateUrl: './roomBedModify.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, room_service_1.RoomService])
], RoomBedModifySite);
exports.RoomBedModifySite = RoomBedModifySite;
//# sourceMappingURL=roomBedModify.site.js.map