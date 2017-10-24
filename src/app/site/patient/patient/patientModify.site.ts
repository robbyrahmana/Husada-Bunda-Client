import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from '@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Patient }                              from '../../../service/domain/patient/patient.domain';
import { PatientService }                       from '../../../service/intercept/patient/patient.service';

import { RoomCategory }                         from '../../../service/domain/room/room.domain';
import { RoomService }                          from '../../../service/intercept/room/room.service';

import {    
            BloodGroup, 
            Education,
            Gender, 
            Identity,
            Insurance,
            Relationship,
            Religion, 
            Rhesus,
            Title, 
            Tribe,
            Work
        }                                       from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './PatientModify.site.html'
})
export class PatientModifySite extends EditHelper implements Edit{
    
    dataContainer: Patient = new Patient();

    //Dropdown required data
    bloodgroup: any;
    bloodgroupid: any;
    education: any;
    educationid: any;
    gender: any;
    genderid: any;
    identity: any;
    identityid: any;
    insurance: any;
    insuranceid: any;
    relationship: any;
    relationshipid: any;
    religion: any;
    religionid: any;
    rhesus: any;
    rhesusid: any;
    title: any;
    titleid: any;
    tribe: any;
    tribeid: any;
    work: any;
    workid: any;
    roomcategory: any;
    roomcategoryid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : MaintenanceService, private dataService_room : RoomService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("patient");
        this.route.params.subscribe(params => {
            //get dropdown data
            this.dataService_extra.getTitleAllData().subscribe(data => {
                this.title = new Title();
                this.title = data;
                this.dataService_extra.getBloodGroupAllData().subscribe(data2 => {
                    this.bloodgroup = new BloodGroup();
                    this.bloodgroup = data2;
                });
                this.dataService_extra.getEducationAllData().subscribe(data2 => {
                    this.education = new Education();
                    this.education = data2;
                });
                this.dataService_extra.getGenderAllData().subscribe(data2 => {
                    this.gender = new Gender();
                    this.gender = data2;
                });
                this.dataService_extra.getIdentityAllData().subscribe(data2 => {
                    this.identity = new Identity();
                    this.identity = data2;
                });
                this.dataService_extra.getRelationshipAllData().subscribe(data2 => {
                    this.relationship = new Relationship();
                    this.relationship = data2;
                });
                this.dataService_extra.getReligionAllData().subscribe(data2 => {
                    this.religion = new Religion();
                    this.religion = data2;
                });
                this.dataService_extra.getRhesusAllData().subscribe(data2 => {
                    this.rhesus = new Rhesus();
                    this.rhesus = data2;
                });
                this.dataService_extra.getTribeAllData().subscribe(data2 => {
                    this.tribe = new Tribe();
                    this.tribe = data2;
                });
                this.dataService_extra.getWorkAllData().subscribe(data2 => {
                    this.work = new Work();
                    this.work = data2;
                });
                this.dataService_extra.getInsuranceAllData().subscribe(data2 => {
                    this.insurance = new Insurance();
                    this.insurance = data2;
                    this.dataService_room.getRoomCategoryAllData().subscribe(data3 => {
                        this.roomcategory = new RoomCategory();
                        this.roomcategory = data3;
                    });
                });
            });
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getPatientByID(params['id']).subscribe(data => {  
                    this.dataContainer = data;
                    this.titleid = this.dataContainer.titleEntity.id;
                    this.genderid = this.dataContainer.genderEntity.id

                    //to check mandatory data
                    if (this.dataContainer.bloodGroupEntity) {
                        this.bloodgroupid = this.dataContainer.bloodGroupEntity.id
                    }
                    if (this.dataContainer.educationEntity) {
                        this.educationid = this.dataContainer.educationEntity.id
                    }
                    if (this.dataContainer.identityEntity) {
                        this.identityid = this.dataContainer.identityEntity.id
                    }
                    if (this.dataContainer.insuranceEntity) {
                        this.insuranceid = this.dataContainer.insuranceEntity.id;
                    }
                    if (this.dataContainer.relationshipEntity) {
                        this.relationshipid = this.dataContainer.relationshipEntity.id;
                    }
                    if (this.dataContainer.religionEntity) {
                        this.religionid = this.dataContainer.religionEntity.id;
                    }
                    if (this.dataContainer.rhesusEntity) {
                        this.rhesusid = this.dataContainer.rhesusEntity.id;
                    }
                    if (this.dataContainer.tribeEntity) {
                        this.tribeid = this.dataContainer.tribeEntity.id;
                    }
                    if (this.dataContainer.workEntity) {
                        this.workid = this.dataContainer.workEntity.id;
                    }
                    if (this.dataContainer.roomCategoryEntity) {
                        this.roomcategoryid = this.dataContainer.roomCategoryEntity.id;
                    }
                    
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<Patient>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientRecord(this.dataContainer);
        }
        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert, reference number : " + data.refnopatient);
                    this.backToList(this.moduleName);
                } else {
                    alert("Berhasil update");
                    this.backToList(this.moduleName);
                }
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getValueIdentity(id: any) {
        this.identityid = id;
        return this.identity.find(x => x.id === id);
    }

    getValueTitle(id: any) {
        this.titleid = id;
        return this.title.find(x => x.id === id);
    }

    getValueGender(id: any) {
        this.genderid = id;
        return this.gender.find(x => x.id === id);
    }

    getValueWork(id: any) {
        this.workid = id;
        return this.work.find(x => x.id === id);
    }

    getValueReligion(id: any) {
        this.religionid = id;
        return this.religion.find(x => x.id === id);
    }

    getValueEducation(id: any) {
        this.educationid = id;
        return this.education.find(x => x.id === id);
    }

    getValueBloodgroup(id: any) {
        this.bloodgroupid = id;
        return this.bloodgroup.find(x => x.id === id);
    }

    getValueRhesus(id: any) {
        this.rhesusid = id;
        return this.rhesus.find(x => x.id === id);
    }

    getValueTribe(id: any) {
        this.tribeid = id;
        return this.tribe.find(x => x.id === id);
    }

    getValueRelationship(id: any) {
        this.relationshipid = id;
        return this.relationship.find(x => x.id === id);
    }

    getValuerInsurance(id: any) {
        this.insuranceid = id;
        return this.insurance.find(x => x.id === id);
    }

    getValueRoomcategory(id: any) {
        this.roomcategoryid = id;
        return this.roomcategory.find(x => x.id === id);
    }
}