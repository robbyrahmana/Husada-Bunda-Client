import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { AssetGroup }                               from '../../../service/domain/asset/asset.domain';
import { AssetService }                       from '../../../service/intercept/asset/asset.service';

@Component({
  templateUrl: './assetgroupModify.site.html'
})
export class AssetGroupModifySite extends EditHelper implements Edit{
    
    dataContainer: AssetGroup = new AssetGroup();

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : AssetService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("assetgroup");
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getAssetGroupByID(params['id']).subscribe(data => {
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
        let observable:Observable<AssetGroup>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveAssetGroupRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateAssetGroupRecord(this.dataContainer);
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