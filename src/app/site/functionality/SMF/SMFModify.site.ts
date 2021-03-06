import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { SMF }                                  from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './SMFModify.site.html'
})
export class SMFModifySite extends EditHelper implements Edit{
    
    dataContainer: SMF = new SMF();
    SMF: any;
    SMFid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : FunctionalityService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("smf");
        this.route.params.subscribe(params => {
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getSMFByID(params['id']).subscribe(data => {
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
        let observable:Observable<SMF>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveSMFRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateSMFRecord(this.dataContainer);
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