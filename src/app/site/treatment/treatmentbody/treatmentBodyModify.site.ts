import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { TreatmentBody, TreatmentHeader, Product }       from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                     from '../../../service/intercept/treatment/treatment.service';

@Component({
  templateUrl: './treatmentBodyModify.site.html'
})
export class TreatmentBodyModifySite extends EditHelper implements Edit{
    
    dataContainer: TreatmentBody = new TreatmentBody();
    treatmentheader: any;
    treatmentheaderid: any;

    product: any;
    productid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : TreatmentService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("treatmentbody");
        this.route.params.subscribe(params => {
            //get dropdown data
            this.dataService.getTreatmentHeaderAllData().subscribe(data => {
                this.treatmentheader = new TreatmentHeader();
                this.treatmentheader = data;
                this.dataService.getProductAllData().subscribe(data => {
                    this.product = new Product();
                    this.product = data;
                });
            });

            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getTreatmentBodyByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.treatmentheaderid = this.dataContainer.treatmentHeaderEntity.id;
                    this.productid = this.dataContainer.productEntity.id;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<TreatmentBody>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveTreatmentBodyRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateTreatmentBodyRecord(this.dataContainer);
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
        this.treatmentheaderid = id;
        return this.treatmentheader.find(x => x.id === id);
    }

    getValueProduct(id: any) {
        this.productid = id;
        return this.product.find(x => x.id === id);
    }
}