"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreatmentHeader = (function () {
    function TreatmentHeader(id, cd, name, showbody, remark) {
        this.id = id;
        this.cd = cd;
        this.name = name;
        this.showbody = showbody;
        this.remark = remark;
    }
    return TreatmentHeader;
}());
exports.TreatmentHeader = TreatmentHeader;
var TreatmentBody = (function () {
    function TreatmentBody(id, treatmentHeaderEntity, cd, name, remark) {
        this.id = id;
        this.treatmentHeaderEntity = treatmentHeaderEntity;
        this.cd = cd;
        this.name = name;
        this.remark = remark;
    }
    return TreatmentBody;
}());
exports.TreatmentBody = TreatmentBody;
var TreatmentDetails = (function () {
    function TreatmentDetails(id, treatmentBodyEntity, cd, name, cost, remark) {
        this.id = id;
        this.treatmentBodyEntity = treatmentBodyEntity;
        this.cd = cd;
        this.name = name;
        this.cost = cost;
        this.remark = remark;
    }
    return TreatmentDetails;
}());
exports.TreatmentDetails = TreatmentDetails;
//# sourceMappingURL=treatment.domain.js.map