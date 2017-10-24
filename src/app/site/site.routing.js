"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var site_component_1 = require("./site.component");
var index_site_1 = require("./index/index.site");
var listsample_site_1 = require("./sample/listsample.site");
var editpage_site_1 = require("./sample/editpage.site");
//Room
var roomCategory_site_1 = require("./room/roomcategory/roomCategory.site");
var roomCategoryModify_site_1 = require("./room/roomcategory/roomCategoryModify.site");
var roomdetail_site_1 = require("./room/roomdetail/roomdetail.site");
var roomdetailmodify_site_1 = require("./room/roomdetail/roomdetailmodify.site");
var roombed_site_1 = require("./room/roombed/roombed.site");
var roomBedModify_site_1 = require("./room/roombed/roomBedModify.site");
//Treatment
var treatmentheader_site_1 = require("./treatment/treatmentheader/treatmentheader.site");
var treatmentheaderModify_site_1 = require("./treatment/treatmentheader/treatmentheaderModify.site");
var treatmentbody_site_1 = require("./treatment/treatmentbody/treatmentbody.site");
var treatmentbodyModify_site_1 = require("./treatment/treatmentbody/treatmentbodyModify.site");
var treatmentdetails_site_1 = require("./treatment/treatmentdetails/treatmentdetails.site");
var treatmentdetailsModify_site_1 = require("./treatment/treatmentdetails/treatmentdetailsModify.site");
//Apoteker
var medicine_site_1 = require("./apoteker/medicine/medicine.site");
var medicineModify_site_1 = require("./apoteker/medicine/medicineModify.site");
//Patient
var patient_site_1 = require("./patient/patient/patient.site");
var patientModify_site_1 = require("./patient/patient/patientModify.site");
var IPDPatient_site_1 = require("./patient/patientadministration/IPDPatient.site");
var OPDPatient_site_1 = require("./patient/patientadministration/OPDPatient.site");
var RegistrationInquiry_site_1 = require("./patient/patientadministration/RegistrationInquiry.site");
var treatment_site_1 = require("./nurse/treatment/treatment.site");
var treatmentModify_site_1 = require("./nurse/treatment/treatmentModify.site");
//Apoteker
var desease_site_1 = require("./functionality/desease/desease.site");
var deseaseModify_site_1 = require("./functionality/desease/deseaseModify.site");
var dokter_site_1 = require("./functionality/dokter/dokter.site");
var dokterModify_site_1 = require("./functionality/dokter/dokterModify.site");
var employee_site_1 = require("./functionality/employee/employee.site");
var employeeModify_site_1 = require("./functionality/employee/employeeModify.site");
//Maintenance
var title_site_1 = require("./maintenance/title/title.site");
var titleModify_site_1 = require("./maintenance/title/titleModify.site");
var bloodGroup_site_1 = require("./maintenance/bloodGroup/bloodGroup.site");
var bloodGroupModify_site_1 = require("./maintenance/bloodGroup/bloodGroupModify.site");
var gender_site_1 = require("./maintenance/gender/gender.site");
var genderModify_site_1 = require("./maintenance/gender/genderModify.site");
var religion_site_1 = require("./maintenance/religion/religion.site");
var religionModify_site_1 = require("./maintenance/religion/religionModify.site");
var insurance_site_1 = require("./maintenance/insurance/insurance.site");
var insuranceModify_site_1 = require("./maintenance/insurance/insuranceModify.site");
var unit_site_1 = require("./maintenance/unit/unit.site");
var unitModify_site_1 = require("./maintenance/unit/unitModify.site");
var SiteRoutes = [
    {
        path: '',
        component: site_component_1.SiteComponent,
        //canActivate: [AuthGuard],
        children: [
            {
                path: '',
                //canActivateChild: [AuthGuard],
                children: [
                    { path: 'list', component: listsample_site_1.ListSampleSite },
                    { path: 'edit', component: editpage_site_1.EditPageSite },
                    { path: 'home', component: index_site_1.IndexSite },
                    //Room
                    { path: 'roomcategory', component: roomCategory_site_1.RoomCategorySite },
                    { path: 'roomcategory/modify', component: roomCategoryModify_site_1.RoomCategoryModifySite },
                    { path: 'roomcategory/modify/:id', component: roomCategoryModify_site_1.RoomCategoryModifySite },
                    { path: 'roomdetail', component: roomdetail_site_1.RoomDetailSite },
                    { path: 'roomdetail/modify', component: roomdetailmodify_site_1.RoomDetailModifySite },
                    { path: 'roomdetail/modify/:id', component: roomdetailmodify_site_1.RoomDetailModifySite },
                    { path: 'roombed', component: roombed_site_1.RoomBedSite },
                    { path: 'roombed/modify', component: roomBedModify_site_1.RoomBedModifySite },
                    { path: 'roombed/modify/:id', component: roomBedModify_site_1.RoomBedModifySite },
                    //Treatment
                    { path: 'treatmentheader', component: treatmentheader_site_1.TreatmentHeaderSite },
                    { path: 'treatmentheader/modify', component: treatmentheaderModify_site_1.TreatmentHeaderModifySite },
                    { path: 'treatmentheader/modify/:id', component: treatmentheaderModify_site_1.TreatmentHeaderModifySite },
                    { path: 'treatmentbody', component: treatmentbody_site_1.TreatmentBodySite },
                    { path: 'treatmentbody/modify', component: treatmentbodyModify_site_1.TreatmentBodyModifySite },
                    { path: 'treatmentbody/modify/:id', component: treatmentbodyModify_site_1.TreatmentBodyModifySite },
                    { path: 'treatmentdetails', component: treatmentdetails_site_1.TreatmentDetailsSite },
                    { path: 'treatmentdetails/modify', component: treatmentdetailsModify_site_1.TreatmentDetailsModifySite },
                    { path: 'treatmentdetails/modify/:id', component: treatmentdetailsModify_site_1.TreatmentDetailsModifySite },
                    //Patient
                    { path: 'patient', component: patient_site_1.PatientSite },
                    { path: 'patient/modify', component: patientModify_site_1.PatientModifySite },
                    { path: 'patient/modify/:id', component: patientModify_site_1.PatientModifySite },
                    { path: 'inpatient', component: IPDPatient_site_1.IPDPatientModifySite },
                    { path: 'outpatient', component: OPDPatient_site_1.OPDPatientModifySite },
                    { path: 'patientadministration', component: RegistrationInquiry_site_1.PatientAdministrationSite },
                    //Nurse
                    { path: 'treatmentmanager', component: treatment_site_1.PatientTreatmentSite },
                    { path: 'treatmentmanager/modify', component: treatmentModify_site_1.PatientTreatmentModifySite },
                    { path: 'treatmentmanager/modify/:id', component: treatmentModify_site_1.PatientTreatmentModifySite },
                    //Treatment
                    { path: 'medicine', component: medicine_site_1.MedicineSite },
                    { path: 'medicine/modify', component: medicineModify_site_1.MedicineModifySite },
                    { path: 'medicine/modify/:id', component: medicineModify_site_1.MedicineModifySite },
                    //Treatment
                    { path: 'desease', component: desease_site_1.DeseaseSite },
                    { path: 'desease/modify', component: deseaseModify_site_1.DeseaseModifySite },
                    { path: 'desease/modify/:id', component: deseaseModify_site_1.DeseaseModifySite },
                    { path: 'dokter', component: dokter_site_1.DokterSite },
                    { path: 'dokter/modify', component: dokterModify_site_1.DokterModifySite },
                    { path: 'dokter/modify/:id', component: dokterModify_site_1.DokterModifySite },
                    { path: 'employee', component: employee_site_1.EmployeeSite },
                    { path: 'employee/modify', component: employeeModify_site_1.EmployeeModifySite },
                    { path: 'employee/modify/:id', component: employeeModify_site_1.EmployeeModifySite },
                    //Maintenance
                    { path: 'title', component: title_site_1.TitleSite },
                    { path: 'title/modify', component: titleModify_site_1.TitleModifySite },
                    { path: 'title/modify/:id', component: titleModify_site_1.TitleModifySite },
                    { path: 'bloodgroup', component: bloodGroup_site_1.BloodGroupSite },
                    { path: 'bloodgroup/modify', component: bloodGroupModify_site_1.BloodGroupModifySite },
                    { path: 'bloodgroup/modify/:id', component: bloodGroupModify_site_1.BloodGroupModifySite },
                    { path: 'gender', component: gender_site_1.GenderSite },
                    { path: 'gender/modify', component: genderModify_site_1.GenderModifySite },
                    { path: 'gender/modify/:id', component: genderModify_site_1.GenderModifySite },
                    { path: 'religion', component: religion_site_1.ReligionSite },
                    { path: 'religion/modify', component: religionModify_site_1.ReligionModifySite },
                    { path: 'religion/modify/:id', component: religionModify_site_1.ReligionModifySite },
                    { path: 'insurance', component: insurance_site_1.InsuranceSite },
                    { path: 'insurance/modify', component: insuranceModify_site_1.InsuranceModifySite },
                    { path: 'insurance/modify/:id', component: insuranceModify_site_1.InsuranceModifySite },
                    { path: 'unit', component: unit_site_1.UnitSite },
                    { path: 'unit/modify', component: unitModify_site_1.UnitModifySite },
                    { path: 'unit/modify/:id', component: unitModify_site_1.UnitModifySite },
                    { path: '', redirectTo: './site/home', pathMatch: 'full' },
                ]
            }
        ]
    }
];
var SiteRoutingModule = (function () {
    function SiteRoutingModule() {
    }
    return SiteRoutingModule;
}());
SiteRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(SiteRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: []
    })
], SiteRoutingModule);
exports.SiteRoutingModule = SiteRoutingModule;
//# sourceMappingURL=site.routing.js.map