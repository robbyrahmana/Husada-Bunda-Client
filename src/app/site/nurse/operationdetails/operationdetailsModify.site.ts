import { Component, Input, OnChanges, SimpleChange, OnInit, Output, EventEmitter } from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientOperationDetails, PatientOperation }      from '../../../service/domain/patient/patient.domain';
import { PatientService }                      from '../../../service/intercept/patient/patient.service';

import { TreatmentBody }      from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                      from '../../../service/intercept/treatment/treatment.service';

@Component({
    selector: "operation-details-modify",
    templateUrl: './operationdetailsModify.site.html'
})
export class PatientOperationDetailsModifySite extends EditHelper implements Edit, OnChanges {

    @Input() id: string = "";
    @Input() data: PatientOperation = new PatientOperation();
    @Output() result = new EventEmitter<any>();

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.error = null;
        this.getinitialdata();
    }

    ngOnInit() {
        this.getinitialdata();
    }

    dataContainer: PatientOperationDetails = new PatientOperationDetails();

    //Dropdown required data
    treatmentbody: any;
    treatmentbodyid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : TreatmentService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("operationdetailsmanager");
    }

    getinitialdata() {
        //get dropdown data
        let observable: Observable<TreatmentBody> = this.dataService_extra.getTreatmentBodyForNurseOperation();
        observable.subscribe(data => {
            this.treatmentbody = new TreatmentBody();
            this.treatmentbody = data;
        });
        if (this.id != "") {
            this.dataService.getPatientOperationDetailsByID(this.id).subscribe(data => {
                this.dataContainer = data;
                this.treatmentbodyid = this.dataContainer.treatmentBodyEntity.id;
            });
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = false;
        } else {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = true;
        }

        
        this.dataContainer.patientOperationEntity = this.data;
    }

    submit() {
        this.error = null;
        let observable:Observable<PatientOperationDetails>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientOperationDetailsRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientOperationDetailsRecord(this.dataContainer);
        }

        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                } else {
                    alert("Berhasil update");
                }
                
                this.dataContainer.treatmentBodyEntity = null;
                this.treatmentbodyid = "";
                this.result.emit();
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getValueTreatmentBody(id: any) {
        this.treatmentbodyid = id;
        return this.treatmentbody.find(x => x.id === id);
    }
}