import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientTreatment }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

import { TreatmentHeader, TreatmentBody } from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                           from '../../../service/intercept/treatment/treatment.service';

import { Functionality }               from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './treatmentmodify.site.html'
})
export class PatientTreatmentModifySite extends EditHelper implements Edit{
    
    nametemp: any;
    doktertemp: any;
    dataContainer: PatientTreatment = new PatientTreatment();

    treatment: any;
    treatmentid: any;
    functionality: any;
    functionalityid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra: TreatmentService, private dataService_function: FunctionalityService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("treatmentmanager");
        this.route.params.subscribe(params => {
            //get room category
            let observable: Observable<TreatmentBody> = this.dataService_extra.getTreatmentBodyForNurseTreatment();
            observable.subscribe(data => {
                this.treatment = new TreatmentBody();
                this.treatment = data;
                let observable: Observable<Functionality> = this.dataService_function.getFunctionalityByPositionID("2da0a8c9-64f6-412a-891c-50a7603cfe87");
                observable.subscribe(data => {
                    this.functionality = new Functionality();
                    this.functionality = data;
                });
            });
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getPatientTreatmentByID(params['id']).subscribe(data => {  
                    this.dataContainer = data;
                    this.doktertemp = this.dataContainer.patientAdministrationEntity.functionalityEntity.name;
                    this.nametemp = this.dataContainer.patientAdministrationEntity.patientEntity.titleEntity.title + " " + this.dataContainer.patientAdministrationEntity.patientEntity.name;
                    this.treatmentid = this.dataContainer.treatmentBodyEntity.id;
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
        let observable:Observable<PatientTreatment>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientTreatmentRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientTreatmentRecord(this.dataContainer);
        }
        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
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

    getValueDetail(id: any) {
        this.treatmentid = id;
        return this.treatment.find(x => x.id === id);
    }

    getValueFunctionality(id: any) {
        this.functionalityid = id;
        return this.functionality.find(x => x.id === id);
    }

    modalSelect(data: any) {
        this.dataContainer.patientAdministrationEntity = data;
        this.doktertemp = this.dataContainer.patientAdministrationEntity.functionalityEntity.name;
        this.nametemp = this.dataContainer.patientAdministrationEntity.patientEntity.titleEntity.title + " " + this.dataContainer.patientAdministrationEntity.patientEntity.name;
    }
}