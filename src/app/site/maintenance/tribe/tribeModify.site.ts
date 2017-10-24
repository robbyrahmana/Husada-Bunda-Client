import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Tribe }                                from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './tribeModify.site.html'
})
export class TribeModifySite extends EditHelper implements Edit{
    
    dataContainer: Tribe = new Tribe();
    tribe: any;
    tribeid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("tribe");
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getTribeByID(params['id']).subscribe(data => {
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
        let observable:Observable<Tribe>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveTribeRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateTribeRecord(this.dataContainer);
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