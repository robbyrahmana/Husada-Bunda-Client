import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientOperation }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

import { Functionality }               from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './operationmodify.site.html'
})
export class PatientOperationModifySite extends EditHelper implements Edit{
    
    nametemp: any;
    doktertemp: any;
    dataContainer: PatientOperation = new PatientOperation();

    functionality: any;
    functionalityid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : FunctionalityService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("operationmanager");
        this.route.params.subscribe(params => {

            let observable: Observable<Functionality> = this.dataService_extra.getFunctionalityByPositionID("2da0a8c9-64f6-412a-891c-50a7603cfe87");
            observable.subscribe(data => {
                this.functionality = new Functionality();
                this.functionality = data;
            });

            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<PatientOperation>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientOperationRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientOperationRecord(this.dataContainer);
        }
        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                    this.router.navigate(["./site/operationdetailsmanager", data.id], { skipLocationChange: true });
                } else {
                    alert("Berhasil update");
                }
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
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