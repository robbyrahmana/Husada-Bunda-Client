"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomCategory = (function () {
    function RoomCategory(id, cd, name, cost, dscp) {
        this.id = id;
        this.cd = cd;
        this.name = name;
        this.cost = cost;
        this.dscp = dscp;
    }
    return RoomCategory;
}());
exports.RoomCategory = RoomCategory;
var RoomDetail = (function () {
    function RoomDetail(id, cd, name, roomCategoryEntity, dscp) {
        this.id = id;
        this.cd = cd;
        this.name = name;
        this.roomCategoryEntity = roomCategoryEntity;
        this.dscp = dscp;
    }
    return RoomDetail;
}());
exports.RoomDetail = RoomDetail;
var RoomBed = (function () {
    function RoomBed(id, cd, roomDetailEntity, dscp, isAvailable) {
        this.id = id;
        this.cd = cd;
        this.roomDetailEntity = roomDetailEntity;
        this.dscp = dscp;
        this.isAvailable = isAvailable;
    }
    return RoomBed;
}());
exports.RoomBed = RoomBed;
//# sourceMappingURL=room.domain.js.map