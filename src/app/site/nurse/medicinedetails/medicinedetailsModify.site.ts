import { Component, Input, OnChanges, SimpleChange, OnInit, Output, EventEmitter } from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientMedicineDetails, PatientMedicine }      from '../../../service/domain/patient/patient.domain';
import { PatientService }                      from '../../../service/intercept/patient/patient.service';

import { Medicine, MedicineUnitConverter }      from '../../../service/domain/apoteker/apoteker.domain';
import { ApotekerService }                      from '../../../service/intercept/apoteker/apoteker.service';

@Component({
    selector: "medicine-details-modify",
    templateUrl: './medicinedetailsModify.site.html'
})
export class PatientMedicineDetailsModifySite extends EditHelper implements Edit, OnChanges {

    @Input() id: string = "";
    @Input() data: PatientMedicine = new PatientMedicine();
    @Output() result = new EventEmitter<any>();

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.error = null;
        this.getinitialdata();
    }

    ngOnInit() {
        this.getinitialdata();
    }

    dataContainer: PatientMedicineDetails = new PatientMedicineDetails();

    //Dropdown required data
    medicine: any;
    medicineid: any;
    medicineconvert: any;
    medicineconverttemp: any;
    medicineconvertid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService, private dataService_extra : ApotekerService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("medicinedetailsmanager");
    }

    getinitialdata() {
        //get dropdown data
        let observable: Observable<Medicine> = this.dataService_extra.getMedicineAllData();
        observable.subscribe(data => {
            this.medicine = new Medicine();
            this.medicine = data;
        });
        if (this.id != "") {
            this.dataService.getPatientMedicineDetailsByID(this.id).subscribe(data => {
                this.dataContainer = data;
                this.medicineid = this.dataContainer.medicineEntity.id;
                this.getMedicineConvert(this.medicineid);
                this.medicineconvertid = this.dataContainer.medicineUnitConverterEntity.id;

            });
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = false;
        } else {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = true;
        }

        
        this.dataContainer.patientMedicineEntity = this.data;
    }

    submit() {
        this.error = null;
        let observable:Observable<PatientMedicineDetails>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePatientMedicineDetailsRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePatientMedicineDetailsRecord(this.dataContainer);
        }

        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                } else {
                    alert("Berhasil update");
                }
                
                this.dataContainer.medicineEntity = null;
                this.dataContainer.medicineUnitConverterEntity = null;
                this.dataContainer.quantity = null;
                this.medicineid = "";
                this.medicineconvertid = "";
                this.result.emit();
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getMedicineConvert(id: any) {
        this.medicineconvert = null;
        this.medicineconvert = null;

        this.medicineid = id;
        this.dataContainer.medicineEntity = this.medicine.find(x => x.id === id);

        //get room detail by category
        let observable: Observable<MedicineUnitConverter> = this.dataService_extra.getMedicineUnitConverterByMedicineID(id);
        observable.subscribe(data => {
            this.medicineconvert = new MedicineUnitConverter();
            this.medicineconvert = data;
            
            this.medicineconverttemp = [];
            for(var i in data) {
                this.medicineconverttemp.push(JSON.parse(`{"id": "` + data[i].id + `", "name":"` + data[i].unitEntity.unit + `"}`));
            }
        });

        return this.medicine.find(x => x.id === id);
    }

    getValue(id: any) {
        this.medicineconvertid = id;
        return this.medicineconvert.find(x => x.id === id);
    }
}