"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var index_site_1 = require("./index/index.site");
//Components
var footer_component_1 = require("../components/footer/footer.component");
var header_component_1 = require("../components/header/header.component");
var blockheader_component_1 = require("../components/blockheader/blockheader.component");
var button_flat_component_1 = require("../components/button/button.flat.component");
var datepicker_component_1 = require("../components/datepicker/datepicker.component");
var dropdown_component_1 = require("../components/dropdown/dropdown.component");
var textbox_component_1 = require("../components/textbox/textbox.component");
var checkbox_component_1 = require("../components/checkbox/checkbox.component");
var radio_component_1 = require("../components/radio/radio.component");
var tableFilter_component_1 = require("../components/table/filter/tableFilter.component");
var textboxFilter_component_1 = require("../components/table/filter/textboxFilter.component");
var tablePagination_component_1 = require("../components/table/pagination/tablePagination.component");
var action_component_1 = require("../components/table/action/action.component");
var notification_component_1 = require("../components/notification/notification.component");
var delimiter_component_1 = require("../components/delimiter/delimiter.component");
var site_component_1 = require("./site.component");
var editpage_site_1 = require("./sample/editpage.site");
var listsample_site_1 = require("./sample/listsample.site");
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
var unitconvert_site_1 = require("./apoteker/medicineunitconverter/unitconvert.site");
var unitconvertModify_site_1 = require("./apoteker/medicineunitconverter/unitconvertModify.site");
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
var site_routing_1 = require("./site.routing");
var SiteModule = (function () {
    function SiteModule() {
    }
    return SiteModule;
}());
SiteModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            site_routing_1.SiteRoutingModule
        ],
        declarations: [
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent, header_component_1.HeaderChecked, header_component_1.SkinChecked,
            blockheader_component_1.BlockHeaderComponent,
            button_flat_component_1.ButtonFlatComponent,
            datepicker_component_1.DatePicker, datepicker_component_1.DatePickerComponent,
            dropdown_component_1.DropdownComponent,
            textbox_component_1.TextBoxComponent,
            checkbox_component_1.CheckBoxComponent,
            radio_component_1.RadioComponent,
            tableFilter_component_1.TableFilterComponent, textboxFilter_component_1.TextBoxFilterComponent, tablePagination_component_1.TablePaginationComponent, action_component_1.TableActionComponent,
            notification_component_1.NotificationComponent,
            delimiter_component_1.DelimiterComponent,
            site_component_1.SiteComponent, site_component_1.ScrollbarChecked,
            editpage_site_1.EditPageSite,
            listsample_site_1.ListSampleSite,
            index_site_1.IndexSite,
            roomCategory_site_1.RoomCategorySite, roomCategoryModify_site_1.RoomCategoryModifySite, roomdetail_site_1.RoomDetailSite, roomdetailmodify_site_1.RoomDetailModifySite,
            roombed_site_1.RoomBedSite, roomBedModify_site_1.RoomBedModifySite,
            treatmentbody_site_1.TreatmentBodySite, treatmentdetails_site_1.TreatmentDetailsSite, treatmentheader_site_1.TreatmentHeaderSite,
            treatmentbodyModify_site_1.TreatmentBodyModifySite, treatmentdetailsModify_site_1.TreatmentDetailsModifySite, treatmentheaderModify_site_1.TreatmentHeaderModifySite,
            title_site_1.TitleSite, titleModify_site_1.TitleModifySite, bloodGroup_site_1.BloodGroupSite, bloodGroupModify_site_1.BloodGroupModifySite, gender_site_1.GenderSite, genderModify_site_1.GenderModifySite,
            religion_site_1.ReligionSite, religionModify_site_1.ReligionModifySite, insurance_site_1.InsuranceSite, insuranceModify_site_1.InsuranceModifySite, unit_site_1.UnitSite, unitModify_site_1.UnitModifySite,
            medicine_site_1.MedicineSite, medicineModify_site_1.MedicineModifySite, unitconvert_site_1.UnitConverterSite, unitconvertModify_site_1.UnitConvertModifySite,
            desease_site_1.DeseaseSite, deseaseModify_site_1.DeseaseModifySite, dokter_site_1.DokterSite, dokterModify_site_1.DokterModifySite, employee_site_1.EmployeeSite, employeeModify_site_1.EmployeeModifySite,
            patient_site_1.PatientSite, patientModify_site_1.PatientModifySite, IPDPatient_site_1.IPDPatientModifySite, OPDPatient_site_1.OPDPatientModifySite, RegistrationInquiry_site_1.PatientAdministrationSite,
            treatment_site_1.PatientTreatmentSite, treatmentModify_site_1.PatientTreatmentModifySite
        ]
    })
], SiteModule);
exports.SiteModule = SiteModule;
//# sourceMappingURL=site.module.js.map