import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Patient, PatientAdministration }       from '../../../service/domain/patient/patient.domain';
import { PatientService }                       from '../../../service/intercept/patient/patient.service';

import { Desease, Functionality }                      from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './OPDPatient.site.html'
})
export class OPDPatientModifySite extends EditHelper implements Edit{
    
    dataContainer: PatientAdministration = new PatientAdministration();
    //child filter
    filter1: string = "";
    filter2: string = "";

    nametemp: any;
    //Dropdown required data
    desease: any;
    deseaseid: any;
    functionality: any;
    functionalityid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : FunctionalityService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("administration");
        this.filter1 = "dummy";
        this.route.params.subscribe(params => {
            //get dropdown data
            let observable: Observable<Desease> = this.dataService_extra.getDeseaseAllData();
            observable.subscribe(data => {
                this.desease = new Desease();
                this.desease = data 
                let observable: Observable<Functionality> = this.dataService_extra.getFunctionalityByPositionID("2da0a8c9-64f6-412a-891c-50a7603cfe87");
                observable.subscribe(data => {
                    this.functionality = new Functionality();
                    this.functionality = data;
                });
            });
                
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getPatientAdministrationByID(params['id']).subscribe(data => {  
                    this.dataContainer = data;
                    this.deseaseid = this.dataContainer.deseaseEntity.id;
                    this.functionalityid = this.dataContainer.functionalityEntity.id;
                    
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<PatientAdministration>;
        this.dataContainer.adminoption = '2';
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientAdministrationRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientAdministrationRecord(this.dataContainer);
        }
        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert, registration number : " + data.refnoadministrations);
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

    getValueDesease(id: any) {
        this.deseaseid = id;
        return this.desease.find(x => x.id === id);
    }

    getValueFunctionality(id: any) {
        this.functionalityid = id;
        return this.functionality.find(x => x.id === id);
    }

    modalSelect(data: any) {
        this.dataContainer.patientEntity=data;

        //to check user have insurance or not
        if(this.dataContainer.patientEntity.insuranceEntity) {
            this.dataContainer.insuranceEntity=this.dataContainer.patientEntity.insuranceEntity;
            this.dataContainer.roomCategoryEntity=this.dataContainer.patientEntity.roomCategoryEntity;
            this.dataContainer.insurancenumber=this.dataContainer.patientEntity.insurancenumber;
        }
        
        this.nametemp = this.dataContainer.patientEntity.titleEntity.title + " " + this.dataContainer.patientEntity.name;
        this.filter1=this.dataContainer.patientEntity.refnopatient;
        this.filter2=this.dataContainer.patientEntity.name;
    }
}