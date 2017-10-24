"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Desease = (function () {
    function Desease(id, cd, name, remark) {
        this.id = id;
        this.cd = cd;
        this.name = name;
        this.remark = remark;
    }
    return Desease;
}());
exports.Desease = Desease;
var Dokter = (function () {
    function Dokter(id, cd, titleEntity, name) {
        this.id = id;
        this.cd = cd;
        this.titleEntity = titleEntity;
        this.name = name;
    }
    return Dokter;
}());
exports.Dokter = Dokter;
var Employee = (function () {
    function Employee(id, cd, name) {
        this.id = id;
        this.cd = cd;
        this.name = name;
    }
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=functionality.domain.js.map