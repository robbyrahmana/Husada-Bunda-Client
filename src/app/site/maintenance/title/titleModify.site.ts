import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Title }                                from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './titleModify.site.html'
})
export class TitleModifySite extends EditHelper implements Edit{
    
    dataContainer: Title = new Title();
    title: any;
    titleid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("title");
        this.route.params.subscribe(params => {
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getTitleByID(params['id']).subscribe(data => {
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
        let observable:Observable<Title>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveTitleRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateTitleRecord(this.dataContainer);
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