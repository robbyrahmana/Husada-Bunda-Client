import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Medicine }                             from '../../../service/domain/apoteker/apoteker.domain';
import { Unit }                                 from '../../../service/domain/maintenance/maintenance.domain';
import { ApotekerService }                      from '../../../service/intercept/apoteker/apoteker.service';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './medicineModify.site.html'
})
export class MedicineModifySite extends EditHelper implements Edit{
    
    dataContainer: Medicine = new Medicine();
    unit: any;
    unitid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : ApotekerService, private dataService_extra : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("medicinemaster");
        this.route.params.subscribe(params => {
            //get room category
            let observable: Observable<Unit> = this.dataService_extra.getUnitAllData();
            observable.subscribe(data => {
                this.unit = new Unit();
                this.unit = data;
            });
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getMedicineByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.unitid = this.dataContainer.unitEntity.id;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<Medicine>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveMedicineRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateMedicineRecord(this.dataContainer);
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

    getValue(id: any) {
        this.unitid = id;
        return this.unit.find(x => x.id === id);
    }
}