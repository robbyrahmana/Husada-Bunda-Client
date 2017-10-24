/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { 
            AssetGroup,
            Asset
        }                                                           from '../../domain/asset/asset.domain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class AssetService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "asset";
    
    private childurl = ["assetgroup", "asset"];

    //AssetGroup =============================================================================================
    getAssetGroupAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<AssetGroup>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction");
    }

    getAssetGroupAllData():Observable<AssetGroup> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getAssetGroupByID (ID: string):Observable<AssetGroup> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    saveAssetGroupRecord(body: Object): Observable<AssetGroup> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updateAssetGroupRecord(body: Object): Observable<AssetGroup> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //Asset =============================================================================================
    getAssetAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<Asset>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2);
    }

    getAssetAllData():Observable<Asset> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getAssetByID (ID: string):Observable<Asset> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    saveAssetRecord(body: Object): Observable<Asset> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updateAssetRecord(body: Object): Observable<Asset> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    }
}