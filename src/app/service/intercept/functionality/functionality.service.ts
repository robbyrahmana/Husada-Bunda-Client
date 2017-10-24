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
            Desease, 
            DokterCost,
            Functionality,
            Position,
            SMF
        }                                                           from '../../domain/functionality/functionality.domain';
import { CountDomain }                                              from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class FunctionalityService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "functionality";
    
    private childurl = ["desease", "functionality", "position", "smf"];

    //Desease =============================================================================================
    getDeseaseAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<Desease>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    }

    getDeseaseAllData():Observable<Desease> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getDeseaseByID (ID: string):Observable<Desease> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    saveDeseaseRecord(body: Object): Observable<Desease> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updateDeseaseRecord(body: Object): Observable<Desease> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //Functionality =============================================================================================
    getFunctionalityAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<Functionality>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction", filter2, filter2);
    }

    getFunctionalityAllData():Observable<Functionality> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getFunctionalityByID (ID: string):Observable<Functionality> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    saveFunctionalityRecord(body: Object): Observable<Functionality> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updateFunctionalityRecord(body: Object): Observable<Functionality> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    }

    getFunctionalityByPositionID (ID: string):Observable<Functionality> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByPosition");
    }

    //Position =============================================================================================
    getPositionAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter3: string, filter2: string):Observable<PaginationPage<Position>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[2] + "/getTableAction", filter3, filter2);
    }

    getPositionAllData():Observable<Position> {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    }

    getPositionByID (ID: string):Observable<Position> {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    }

    savePositionRecord(body: Object): Observable<Position> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    }

    updatePositionRecord(body: Object): Observable<Position> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    }

    //SMF =============================================================================================
    getSMFAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter4: string, filter2: string):Observable<PaginationPage<SMF>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[3] + "/getTableAction", filter4, filter2);
    }

    getSMFAllData():Observable<SMF> {
        return this.helperService.getAllData(this.url, this.childurl[3] + "/getListAction");
    }

    getSMFByID (ID: string):Observable<SMF> {
        return this.helperService.getDataById(this.url, ID, this.childurl[3] + "/getListByIdAction");
    }

    saveSMFRecord(body: Object): Observable<SMF> {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/saveAction");
    }

    updateSMFRecord(body: Object): Observable<SMF> {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/updateAction");
    }
}