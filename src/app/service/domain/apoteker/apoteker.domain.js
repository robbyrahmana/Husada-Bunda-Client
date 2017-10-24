"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medicine = (function () {
    function Medicine(id, cd, name, unitEntity, remark) {
        this.id = id;
        this.cd = cd;
        this.name = name;
        this.unitEntity = unitEntity;
        this.remark = remark;
    }
    return Medicine;
}());
exports.Medicine = Medicine;
var MedicineUnitConverter = (function () {
    function MedicineUnitConverter(id, medicineEntity, unitEntity, quantity, price) {
        this.id = id;
        this.medicineEntity = medicineEntity;
        this.unitEntity = unitEntity;
        this.quantity = quantity;
        this.price = price;
    }
    return MedicineUnitConverter;
}());
exports.MedicineUnitConverter = MedicineUnitConverter;
//# sourceMappingURL=apoteker.domain.js.map