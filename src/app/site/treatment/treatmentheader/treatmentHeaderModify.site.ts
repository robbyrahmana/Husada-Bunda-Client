import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { TreatmentHeader }                      from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                     from '../../../service/intercept/treatment/treatment.service';

@Component({
  templateUrl: './treatmentHeaderModify.site.html'
})
export class TreatmentHeaderModifySite extends EditHelper implements Edit{
    
    dataContainer: TreatmentHeader = new TreatmentHeader();

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : TreatmentService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("treatmentheader");
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getTreatmentHeaderByID(params['id']).subscribe(data => {
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
        let observable:Observable<TreatmentHeader>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveTreatmentHeaderRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateTreatmentHeaderRecord(this.dataContainer);
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