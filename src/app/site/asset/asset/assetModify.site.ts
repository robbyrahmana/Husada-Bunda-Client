import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { Asset,AssetGroup }                               from '../../../service/domain/asset/asset.domain';
import { AssetService }                       from '../../../service/intercept/asset/asset.service';

@Component({
  templateUrl: './assetmodify.site.html'
})
export class AssetModifySite extends EditHelper implements Edit{
    
    dataContainer: Asset = new Asset();
    assetgroup: any;
    assetgroupid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : AssetService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("assetmanager");
        this.route.params.subscribe(params => {
            //get dropdown data
            this.dataService.getAssetGroupAllData().subscribe(data => {
                this.assetgroup = new AssetGroup();
                this.assetgroup = data;
            });

            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getAssetByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.assetgroupid = this.dataContainer.assetGroupEntity.id;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<Asset>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveAssetRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateAssetRecord(this.dataContainer);
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

    getValueAssetGroup(id: any) {
        this.assetgroupid = id;
        return this.assetgroup.find(x => x.id === id);
    }
}