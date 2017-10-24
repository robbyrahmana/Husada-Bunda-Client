"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient = (function () {
    function Patient(id, refnopatient, titleEntity, identitynumber, name, genderEntity, religionEntity, birthplace, birthday, bloodGroupEntity, addrline1, addrline2, addrline3, mobilenumber, insuranceEntity, roomCategoryEntity, insurancenumber) {
        this.id = id;
        this.refnopatient = refnopatient;
        this.titleEntity = titleEntity;
        this.identitynumber = identitynumber;
        this.name = name;
        this.genderEntity = genderEntity;
        this.religionEntity = religionEntity;
        this.birthplace = birthplace;
        this.birthday = birthday;
        this.bloodGroupEntity = bloodGroupEntity;
        this.addrline1 = addrline1;
        this.addrline2 = addrline2;
        this.addrline3 = addrline3;
        this.mobilenumber = mobilenumber;
        this.insuranceEntity = insuranceEntity;
        this.roomCategoryEntity = roomCategoryEntity;
        this.insurancenumber = insurancenumber;
    }
    return Patient;
}());
exports.Patient = Patient;
var PatientAdministration = (function () {
    function PatientAdministration(id, createDate, refnoadministrations, patientEntity, adminoption, deseaseEntity, dokterEntity, roomBedEntity, insuranceEntity, roomCategoryEntity, insurancenumber) {
        this.id = id;
        this.createDate = createDate;
        this.refnoadministrations = refnoadministrations;
        this.patientEntity = patientEntity;
        this.adminoption = adminoption;
        this.deseaseEntity = deseaseEntity;
        this.dokterEntity = dokterEntity;
        this.roomBedEntity = roomBedEntity;
        this.insuranceEntity = insuranceEntity;
        this.roomCategoryEntity = roomCategoryEntity;
        this.insurancenumber = insurancenumber;
    }
    return PatientAdministration;
}());
exports.PatientAdministration = PatientAdministration;
var PatientTreatment = (function () {
    function PatientTreatment(id, patientAdministrationEntity, treatmentDetailsEntity, cost, remark) {
        this.id = id;
        this.patientAdministrationEntity = patientAdministrationEntity;
        this.treatmentDetailsEntity = treatmentDetailsEntity;
        this.cost = cost;
        this.remark = remark;
    }
    return PatientTreatment;
}());
exports.PatientTreatment = PatientTreatment;
//# sourceMappingURL=patient.domain.js.map