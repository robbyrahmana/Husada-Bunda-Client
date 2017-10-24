import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { SiteComponent }            from './site.component';

import { IndexSite }                from './index/index.site';
import { ListSampleSite }           from './sample/listsample.site';
import { EditPageSite }             from './sample/editpage.site';

//Room
import { RoomCategorySite }         from './room/roomcategory/roomCategory.site';
import { RoomCategoryModifySite }   from './room/roomcategory/roomCategoryModify.site';
import { RoomDetailSite }           from './room/roomdetail/roomdetail.site';
import { RoomDetailModifySite }     from './room/roomdetail/roomdetailmodify.site';
import { RoomBedSite }              from './room/roombed/roombed.site';
import { RoomBedModifySite }        from './room/roombed/roomBedModify.site';

//Treatment
import { TreatmentHeaderSite }                  from './treatment/treatmentheader/treatmentheader.site';
import { TreatmentHeaderModifySite }  from './treatment/treatmentheader/treatmentheaderModify.site';
import { TreatmentBodySite }        from './treatment/treatmentbody/treatmentbody.site';
import { TreatmentBodyModifySite }  from './treatment/treatmentbody/treatmentbodyModify.site';

//Apoteker
import { MedicineSite }                           from './apoteker/medicine/medicine.site';
import { MedicineModifySite }                     from './apoteker/medicine/medicineModify.site';
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

import { CanDeactivateGuard }                     from '../login/guard/auth.deactivate.service';

const SiteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: 'list', component: ListSampleSite },
          { path: 'edit', component: EditPageSite },
          { path: 'home', component: IndexSite },

          //Room
          { path: 'roomcategory', component: RoomCategorySite },
          { path: 'roomcategory/modify', component: RoomCategoryModifySite },
          { path: 'roomcategory/modify/:id', component: RoomCategoryModifySite },
          { path: 'roomdetail', component: RoomDetailSite },
          { path: 'roomdetail/modify', component: RoomDetailModifySite },
          { path: 'roomdetail/modify/:id', component: RoomDetailModifySite },
          { path: 'roombed', component: RoomBedSite },
          { path: 'roombed/modify', component: RoomBedModifySite },
          { path: 'roombed/modify/:id', component: RoomBedModifySite },

          //Treatment
          { path: 'treatmentheader', component: TreatmentHeaderSite },
          { path: 'treatmentheader/modify', component: TreatmentHeaderModifySite },
          { path: 'treatmentheader/modify/:id', component: TreatmentHeaderModifySite },
          { path: 'treatmentbody', component: TreatmentBodySite },
          { path: 'treatmentbody/modify', component: TreatmentBodyModifySite },
          { path: 'treatmentbody/modify/:id', component: TreatmentBodyModifySite },
          
          //Patient
          { path: 'patient', component: PatientSite },
          { path: 'patient/modify', component: PatientModifySite },
          { path: 'patient/modify/:id', component: PatientModifySite },
          { path: 'inpatient', component: IPDPatientModifySite },
          { path: 'outpatient', component: OPDPatientModifySite },
          { path: 'patientadministration', component: PatientAdministrationSite },
          { path: 'summary/:id', component: SummarySite },
          
          //Nurse
          { path: 'treatmentmanager', component: PatientTreatmentSite },
          { path: 'treatmentmanager/modify', component: PatientTreatmentModifySite },
          { path: 'treatmentmanager/modify/:id', component: PatientTreatmentModifySite },
          { path: 'medicinemanager', component: PatientMedicineSite },
          { path: 'medicinemanager/modify', component: PatientMedicineModifySite },
          { path: 'medicinedetailsmanager/:id', component: PatientMedicineDetailsSite },
          { path: 'operationmanager', component: PatientOperationSite },
          { path: 'operationmanager/modify', component: PatientOperationModifySite },
          { path: 'operationdetailsmanager/:id', component: PatientOperationDetailsSite },

          //Dokter
          { path: 'doktermanageroperation', component: DokterOperationSite },
          { path: 'doktermanagerpatient', component: DokterPatientSite },
          { path: 'doktermanagertreatment', component: DokterTreatmentSite },

          //Asset
          { path: 'assetgroup', component: AssetGroupSite },
          { path: 'assetgroup/modify', component: AssetGroupModifySite },
          { path: 'assetgroup/modify/:id', component: AssetGroupModifySite },
          { path: 'assetmanager', component: AssetSite },
          { path: 'assetmanager/modify', component: AssetModifySite },
          { path: 'assetmanager/modify/:id', component: AssetModifySite },

          //apoteker
          { path: 'medicine', component: MedicineSite },
          { path: 'medicine/modify', component: MedicineModifySite },
          { path: 'medicine/modify/:id', component: MedicineModifySite },
          { path: 'medicinerequest', component: MedicineRequestSite },
          { path: 'medicinerequest/modify/:id', component: PatientMedicineRequestDetailsSite },

          //Treatment
          { path: 'desease', component: DeseaseSite },
          { path: 'desease/modify', component: DeseaseModifySite },
          { path: 'desease/modify/:id', component: DeseaseModifySite },
          { path: 'functionality', component: FunctionalitySite },
          { path: 'functionality/modify', component: FunctionalityModifySite },
          { path: 'functionality/modify/:id', component: FunctionalityModifySite },
          { path: 'position', component: PositionSite },
          { path: 'position/modify', component: PositionModifySite },
          { path: 'position/modify/:id', component: PositionModifySite },
          { path: 'smf', component: SMFSite },
          { path: 'smf/modify', component: SMFModifySite },
          { path: 'smf/modify/:id', component: SMFModifySite },
          
          //Maintenance
          { path: 'bloodgroup', component: BloodGroupSite },
          { path: 'bloodgroup/modify', component: BloodGroupModifySite },
          { path: 'bloodgroup/modify/:id', component: BloodGroupModifySite },
          { path: 'education', component: EducationSite },
          { path: 'education/modify', component: EducationModifySite },
          { path: 'education/modify/:id', component: EducationModifySite },
          { path: 'gender', component: GenderSite },
          { path: 'gender/modify', component: GenderModifySite },
          { path: 'gender/modify/:id', component: GenderModifySite },
          { path: 'identity', component: IdentitySite },
          { path: 'identity/modify', component: IdentityModifySite },
          { path: 'identity/modify/:id', component: IdentityModifySite },
          { path: 'insurance', component: InsuranceSite },
          { path: 'insurance/modify', component: InsuranceModifySite },
          { path: 'insurance/modify/:id', component: InsuranceModifySite },
          { path: 'relationship', component: RelationshipSite },
          { path: 'relationship/modify', component: RelationshipModifySite },
          { path: 'relationship/modify/:id', component: RelationshipModifySite },
          { path: 'religion', component: ReligionSite },
          { path: 'religion/modify', component: ReligionModifySite },
          { path: 'religion/modify/:id', component: ReligionModifySite },
          { path: 'rhesus', component: RhesusSite },
          { path: 'rhesus/modify', component: RhesusModifySite },
          { path: 'rhesus/modify/:id', component: RhesusModifySite },
          { path: 'title', component: TitleSite },
          { path: 'title/modify', component: TitleModifySite },
          { path: 'title/modify/:id', component: TitleModifySite },
          { path: 'tribe', component: TribeSite },
          { path: 'tribe/modify', component: TribeModifySite },
          { path: 'tribe/modify/:id', component: TribeModifySite },
          { path: 'unit', component: UnitSite },
          { path: 'unit/modify', component: UnitModifySite },
          { path: 'unit/modify/:id', component: UnitModifySite },
          { path: 'work', component: WorkSite },
          { path: 'work/modify', component: WorkModifySite },
          { path: 'work/modify/:id', component: WorkModifySite },

          { path: '',   redirectTo: './site/home', pathMatch: 'full' },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(SiteRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class SiteRoutingModule { }