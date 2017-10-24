import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { PageNotFoundComponent }    from '../not-found.component';

import { IndexSite }                              from './index/index.site';

//Components
import { FooterComponent }                        from '../components/footer/footer.component';
import { HeaderComponent, HeaderChecked, SkinChecked }         from '../components/header/header.component';
import { BlockHeaderComponent }                   from '../components/blockheader/blockheader.component';
import { ButtonFlatComponent }                    from '../components/button/button.flat.component';
import { DatePicker, DatePickerComponent }        from '../components/datepicker/datepicker.component';
import { DropdownComponent }                      from '../components/dropdown/dropdown.component';
import { TextBoxComponent }                       from '../components/textbox/textbox.component';
import { CheckBoxComponent }                      from '../components/checkbox/checkbox.component';
import { RadioComponent }                         from '../components/radio/radio.component';
import { TableFilterComponent }                   from '../components/table/filter/tableFilter.component';
import { TextBoxFilterComponent }                 from '../components/table/filter/textboxFilter.component';
import { TablePaginationComponent }               from '../components/table/pagination/tablePagination.component';
import { TableActionComponent }                   from '../components/table/action/action.component';
import { NotificationComponent }                  from '../components/notification/notification.component';
import { DelimiterComponent }                     from '../components/delimiter/delimiter.component';

import { SiteComponent, ScrollbarChecked }        from './site.component';

import { EditPageSite }                           from './sample/editpage.site';
import { ListSampleSite }                         from './sample/listsample.site';

//Room
import { RoomCategorySite }                       from './room/roomcategory/roomCategory.site';
import { RoomCategoryModifySite }                 from './room/roomcategory/roomCategoryModify.site';
import { RoomDetailSite }                         from './room/roomdetail/roomdetail.site';
import { RoomDetailModifySite }                   from './room/roomdetail/roomdetailmodify.site';
import { RoomBedSite }                            from './room/roombed/roombed.site';
import { RoomBedModifySite }                      from './room/roombed/roomBedModify.site';

//Treatment
import { TreatmentHeaderSite }                    from './treatment/treatmentheader/treatmentheader.site';
import { TreatmentHeaderModifySite }              from './treatment/treatmentheader/treatmentheaderModify.site';
import { TreatmentBodySite }                      from './treatment/treatmentbody/treatmentbody.site';
import { TreatmentBodyModifySite }                from './treatment/treatmentbody/treatmentbodyModify.site';

//Apoteker
import { MedicineSite }                           from './apoteker/medicine/medicine.site';
import { MedicineModifySite }                     from './apoteker/medicine/medicineModify.site';
import { UnitConverterSite }                      from './apoteker/medicineunitconverter/unitconvert.site';
import { UnitConvertModifySite }                  from './apoteker/medicineunitconverter/unitconvertModify.site';
import { MedicineRequestSite }                    from './apoteker/medicinerequest/medicinerequest.site';
import { PatientMedicineRequestDetailsSite }      from './apoteker/medicinerequest/medicinerequestdetails.site';

//Patient
import { PatientSite }                            from './patient/patient/patient.site';
import { PatientModifySite }                      from './patient/patient/patientModify.site';
import { IPDPatientModifySite }                   from './patient/patientadministration/IPDPatient.site';
import { OPDPatientModifySite }                   from './patient/patientadministration/OPDPatient.site';
import { PatientAdministrationSite }              from './patient/patientadministration/RegistrationInquiry.site';
import { PatientTreatmentSite }                   from './nurse/treatment/treatment.site';
import { PatientTreatmentModifySite }             from './nurse/treatment/treatmentModify.site';
import { PatientMedicineSite }                    from './nurse/medicine/medicine.site';
import { PatientMedicineModifySite }              from './nurse/medicine/medicineModify.site';
import { PatientMedicineDetailsSite }             from './nurse/medicinedetails/medicinedetails.site';
import { PatientMedicineDetailsModifySite }       from './nurse/medicinedetails/medicinedetailsModify.site';
import { PatientOperationSite }                   from './nurse/operation/operation.site';
import { PatientOperationModifySite }             from './nurse/operation/operationModify.site';
import { PatientOperationDetailsSite }            from './nurse/operationdetails/operationdetails.site';
import { PatientOperationDetailsModifySite }      from './nurse/operationdetails/operationdetailsModify.site';
import { SummarySite }                            from './patient/patientadministration/summary.site';

//Functionality
import { DeseaseSite }                            from './functionality/desease/desease.site';
import { DeseaseModifySite }                      from './functionality/desease/deseaseModify.site';
import { FunctionalitySite}                       from './functionality/functionality/functionality.site';
import { FunctionalityModifySite }                from './functionality/functionality/functionalityModify.site';
import { PositionSite}                            from './functionality/position/position.site';
import { PositionModifySite }                     from './functionality/position/positionModify.site';
import { SMFSite}                                 from './functionality/SMF/SMF.site';
import { SMFModifySite }                          from './functionality/SMF/SMFModify.site';
import { UserSecurityModifySite }                 from './functionality/functionality/usersecurity.site';

//Asset
import { AssetGroupSite }                         from './asset/assetgroup/assetgroup.site';
import { AssetGroupModifySite }                   from './asset/assetgroup/assetgroupModify.site';
import { AssetSite }                              from './asset/asset/asset.site';
import { AssetModifySite }                        from './asset/asset/assetModify.site';

//Dokter
import { DokterOperationSite }                    from './dokter/operation/dokteroperation.site';
import { DokterPatientSite }                      from './dokter/patient/dokterpatient.site';
import { DokterTreatmentSite }                    from './dokter/treatment/doktertreatment.site';

//Maintenance
import { BloodGroupSite }                         from './maintenance/bloodGroup/bloodGroup.site';
import { BloodGroupModifySite }                   from './maintenance/bloodGroup/bloodGroupModify.site';
import { EducationSite }                          from './maintenance/education/education.site';
import { EducationModifySite }                    from './maintenance/education/educationModify.site';
import { GenderSite }                             from './maintenance/gender/gender.site';
import { GenderModifySite }                       from './maintenance/gender/genderModify.site';
import { IdentitySite }                           from './maintenance/identity/identity.site';
import { IdentityModifySite }                     from './maintenance/identity/identityModify.site';
import { InsuranceSite }                          from './maintenance/insurance/insurance.site';
import { InsuranceModifySite }                    from './maintenance/insurance/insuranceModify.site';
import { RelationshipSite }                       from './maintenance/relationship/relationship.site';
import { RelationshipModifySite }                 from './maintenance/relationship/relationshipModify.site';
import { ReligionSite }                           from './maintenance/religion/religion.site';
import { ReligionModifySite }                     from './maintenance/religion/religionModify.site';
import { RhesusSite }                             from './maintenance/rhesus/rhesus.site';
import { RhesusModifySite }                       from './maintenance/rhesus/rhesusModify.site';
import { TitleSite }                              from './maintenance/title/title.site';
import { TitleModifySite }                        from './maintenance/title/titleModify.site';
import { TribeSite }                              from './maintenance/tribe/tribe.site';
import { TribeModifySite }                        from './maintenance/tribe/tribeModify.site';
import { UnitSite }                               from './maintenance/unit/unit.site';
import { UnitModifySite }                         from './maintenance/unit/unitModify.site';
import { WorkSite }                               from './maintenance/work/work.site';
import { WorkModifySite }                         from './maintenance/work/workModify.site';

import { SiteRoutingModule }                      from './site.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SiteRoutingModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,HeaderChecked,SkinChecked,
    BlockHeaderComponent,
    ButtonFlatComponent,
    DatePicker, DatePickerComponent,
    DropdownComponent,
    TextBoxComponent,
    CheckBoxComponent,
    RadioComponent,
    TableFilterComponent,TextBoxFilterComponent,TablePaginationComponent,TableActionComponent,
    NotificationComponent,
    DelimiterComponent,

    SiteComponent, ScrollbarChecked,
    EditPageSite,
    ListSampleSite,
    IndexSite,

    RoomCategorySite,RoomCategoryModifySite, RoomDetailSite,RoomDetailModifySite, 
    RoomBedSite,RoomBedModifySite,
    TreatmentBodySite,TreatmentHeaderSite,
    TreatmentBodyModifySite, TreatmentHeaderModifySite,

    /* Maintenance */
    BloodGroupSite,BloodGroupModifySite, 
    EducationSite,EducationModifySite,
    GenderSite,GenderModifySite,
    IdentitySite, IdentityModifySite,
    InsuranceSite, InsuranceModifySite,
    RelationshipSite, RelationshipModifySite,
    ReligionSite,ReligionModifySite,  
    RhesusSite, RhesusModifySite,
    TitleSite,TitleModifySite, 
    TribeSite, TribeModifySite,
    UnitSite, UnitModifySite,
    WorkSite, WorkModifySite,
    
    MedicineSite, MedicineModifySite,
    UnitConverterSite,UnitConvertModifySite,
    PatientOperationSite,PatientOperationModifySite,
    PatientOperationDetailsSite, PatientOperationDetailsModifySite,
    SummarySite,

    DeseaseSite,DeseaseModifySite,
    FunctionalitySite,FunctionalityModifySite,
    PositionSite, PositionModifySite,
    SMFSite, SMFModifySite,
    UserSecurityModifySite,

    AssetGroupSite, AssetGroupModifySite,
    AssetSite, AssetModifySite,

    MedicineRequestSite,PatientMedicineRequestDetailsSite,

    DokterOperationSite,DokterPatientSite,DokterTreatmentSite,

    PatientSite,PatientModifySite,IPDPatientModifySite,OPDPatientModifySite,PatientAdministrationSite,
    PatientTreatmentSite,PatientTreatmentModifySite,PatientMedicineSite,PatientMedicineModifySite,
    PatientMedicineDetailsSite, PatientMedicineDetailsModifySite
  ]
})
export class SiteModule {}