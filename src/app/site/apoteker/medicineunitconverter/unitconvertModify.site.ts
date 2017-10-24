import { Component, Input, OnChanges, SimpleChange, OnInit, Output, EventEmitter } from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { MedicineUnitConverter, Medicine }      from '../../../service/domain/apoteker/apoteker.domain';
import { ApotekerService }                      from '../../../service/intercept/apoteker/apoteker.service';

import { Unit } from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
    selector: "unit-convert-modify",
    templateUrl: './unitConvertmodify.site.html'
})
export class UnitConvertModifySite extends EditHelper implements Edit, OnChanges {

    @Input() id: string = "";
    @Input() data: Medicine = new Medicine();
    @Output() result = new EventEmitter<any>();

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.error = null;
        this.getinitialdata();
    }

    ngOnInit() {
        this.getinitialdata();
    }

    dataContainer: MedicineUnitConverter = new MedicineUnitConverter();

    //Dropdown required data
    unit: any;
    unitid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : ApotekerService, private dataService_extra : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("medicineunitconverter");
    }

    getinitialdata() {
        //get dropdown data
        let observable: Observable<Unit> = this.dataService_extra.getUnitAllData();
        observable.subscribe(data => {
            this.unit = new Unit();
            this.unit = data;
        });
        if (this.id != "") {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = false;
            this.dataService.getMedicineUnitConverterByID(this.id).subscribe(data => {
                this.dataContainer = data;
                this.unitid = this.dataContainer.unitEntity.id;
            });
        } else {
            this.editMode = this.globalConstant.setEditMode(false);
            this.newEntry = true;
        }
    }

    submit() {
        this.error = null;
        let observable:Observable<MedicineUnitConverter>;
        this.dataContainer.medicineEntity = this.data;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveMedicineUnitConverterRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateMedicineUnitConverterRecord(this.dataContainer);
        }

        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                } else {
                    alert("Berhasil update");
                }
                this.dataContainer.unitEntity = null;
                this.unitid = "";
                this.dataContainer.quantity = "";
                this.dataContainer.price = "";
                this.result.emit();
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getValueUnit(id: any) {
        this.unitid = id;
        return this.unit.find(x => x.id === id);
    }
}