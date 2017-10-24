import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Unit }                                from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './unitModify.site.html'
})
export class UnitModifySite extends EditHelper implements Edit{
    
    dataContainer: Unit = new Unit();
    Unit: any;
    Unitid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("masterunit");
        this.route.params.subscribe(params => {
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getUnitByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<Unit>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveUnitRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateUnitRecord(this.dataContainer);
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
}