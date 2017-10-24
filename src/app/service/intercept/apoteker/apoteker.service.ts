/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { Medicine, MedicineUnitConverter }                          from '../../domain/apoteker/apoteker.domain';
import { CountDomain }                                              from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class ApotekerService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "apoteker";
    
    private childurl = ["medicine", "medicineunitconverter"];

    //Medicine
    getMedicineAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<Medicine>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    }

    getMedicineAllData():Observable<Medicine> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getMedicineByID (ID: string):Observable<Medicine> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    saveMedicineRecord(body: Object): Observable<Medicine> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updateMedicineRecord(body: Object): Observable<Medicine> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //MedicineUnitConverter
    getMedicineUnitConverterAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<MedicineUnitConverter>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1);
    }

    getMedicineUnitConverterAllData():Observable<MedicineUnitConverter> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getMedicineUnitConverterByID (ID: string):Observable<MedicineUnitConverter> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    saveMedicineUnitConverterRecord(body: Object): Observable<MedicineUnitConverter> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updateMedicineUnitConverterRecord(body: Object): Observable<MedicineUnitConverter> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    }

    //Additional
    getMedicineUnitConverterByMedicineID (ID: string):Observable<MedicineUnitConverter> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByMedicineIdAction");
    }

}