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
var RoomDetailModifySite = (function (_super) {
    __extends(RoomDetailModifySite, _super);
    function RoomDetailModifySite(globalConstant, route, router, dataService) {
        var _this = _super.call(this, globalConstant, route, router, dataService) || this;
        _this.dataContainer = new room_domain_1.RoomDetail();
        _this.generateConfig("roomdetail");
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
                _this.dataService.getRoomDetailByID(params['id']).subscribe(function (data) {
                    _this.dataContainer = data;
                    _this.roomCategoryid = _this.dataContainer.roomCategoryEntity.id;
                });
            }
            else {
                _this.editMode = _this.globalConstant.setEditMode(false);
                _this.newEntry = true;
            }
        });
        return _this;
    }
    RoomDetailModifySite.prototype.submit = function () {
        var _this = this;
        this.error = null;
        var observable;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveRoomDetailRecord(this.dataContainer);
        }
        else {
            observable = this.dataService.updateRoomDetailRecord(this.dataContainer);
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
    RoomDetailModifySite.prototype.getValue = function (id) {
        this.roomCategoryid = id;
        return this.roomcategory.find(function (x) { return x.id === id; });
    };
    return RoomDetailModifySite;
}(edit_helper_1.EditHelper));
RoomDetailModifySite = __decorate([
    core_1.Component({
        templateUrl: './roomDetailModify.site.html'
    }),
    __metadata("design:paramtypes", [globalConstant_1.GlobalConstant, router_1.ActivatedRoute, router_1.Router, room_service_1.RoomService])
], RoomDetailModifySite);
exports.RoomDetailModifySite = RoomDetailModifySite;
//# sourceMappingURL=roomdetailmodify.site.js.map