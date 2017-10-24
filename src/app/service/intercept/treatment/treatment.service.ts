/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { TreatmentHeader, TreatmentBody,Product }                           from '../../domain/treatment/treatment.domain';
import { CountDomain }                                              from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class TreatmentService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "treatment";

    private childurl = [
                            "treatmentheader", 
                            "treatmentbody", 
                            "treatmentdetails",
                            "product"
                        ];

    //Treatment Header
    getTreatmentHeaderAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<TreatmentHeader>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    }

    getTreatmentHeaderAllData():Observable<TreatmentHeader> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getTreatmentHeaderByID (ID: string):Observable<TreatmentHeader> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    saveTreatmentHeaderRecord(body: Object): Observable<TreatmentHeader> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updateTreatmentHeaderRecord(body: Object): Observable<TreatmentHeader> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //Treatment Body
    getTreatmentBodyAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<TreatmentBody>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2);
    }

    getTreatmentBodyAllData():Observable<TreatmentBody> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getTreatmentBodyByID (ID: string):Observable<TreatmentBody> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    saveTreatmentBodyRecord(body: Object): Observable<TreatmentBody> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updateTreatmentBodyRecord(body: Object): Observable<TreatmentBody> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    }

    //Product
    getProductAllData():Observable<Product> {
        return this.helperService.getAllData(this.url, this.childurl[3] + "/getListAction");
    }

    //Additional
    getTreatmentBodyByHeaderId(ID: string):Observable<TreatmentBody> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByHeaderIdAction");
    }

    getTreatmentBodyForNurseTreatment():Observable<TreatmentBody> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListForNurseTreatment");
    }

    getTreatmentBodyForNurseMedicine():Observable<TreatmentBody> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListForNurseMedicine");
    }

    getTreatmentBodyForNurseOperation():Observable<TreatmentBody> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListForNurseOperation");
    }
}