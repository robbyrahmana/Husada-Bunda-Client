import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Position }                             from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './positionModify.site.html'
})
export class PositionModifySite extends EditHelper implements Edit{
    
    dataContainer: Position = new Position();
    position: any;
    positionid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : FunctionalityService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("position");
        this.route.params.subscribe(params => {
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getPositionByID(params['id']).subscribe(data => {
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
        let observable:Observable<Position>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.savePositionRecord(this.dataContainer);
        } else {
            observable = this.dataService.updatePositionRecord(this.dataContainer);
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