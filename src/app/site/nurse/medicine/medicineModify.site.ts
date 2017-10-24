import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientMedicine }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

import { TreatmentBody } from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                           from '../../../service/intercept/treatment/treatment.service';

@Component({
  templateUrl: './medicinemodify.site.html'
})
export class PatientMedicineModifySite extends EditHelper implements Edit{
    
    nametemp: any;
    doktertemp: any;
    dataContainer: PatientMedicine = new PatientMedicine();

    treatment: any;
    treatmentid: any;;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : TreatmentService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("medicinemanager");
        this.route.params.subscribe(params => {
            //Get Dropdown data
            let observable: Observable<TreatmentBody> = this.dataService_extra.getTreatmentBodyForNurseMedicine();
            observable.subscribe(data => {
                this.treatment = new TreatmentBody();
                this.treatment = data;
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
        let observable:Observable<PatientMedicine>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientMedicineRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientMedicineRecord(this.dataContainer);
        }
        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                    this.router.navigate(["./site/medicinedetailsmanager", data.id], { skipLocationChange: true });
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

    getValueTreatment(id: any) {
        this.treatmentid = id;
        return this.treatment.find(x => x.id === id);
    }

    modalSelect(data: any) {
        this.dataContainer.patientAdministrationEntity = data;
        this.doktertemp = this.dataContainer.patientAdministrationEntity.functionalityEntity.name;
        this.nametemp = this.dataContainer.patientAdministrationEntity.patientEntity.titleEntity.title + " " + this.dataContainer.patientAdministrationEntity.patientEntity.name;
    }
}