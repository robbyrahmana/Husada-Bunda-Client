/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { RoomCategory, RoomDetail, RoomBed }                        from '../../domain/room/room.domain';
import { CountDomain }                                              from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class RoomService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "room";

    //Room Category
    getRoomCategoryAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<RoomCategory>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, "roomcategory/getTableAction", filter1, filter2);
    }

    getRoomCategoryAllData():Observable<RoomCategory> {
        return this.helperService.getAllData(this.url, "roomcategory/getListAction");
    }

    getRoomCategoryByID (ID: string):Observable<RoomCategory> {
        return this.helperService.getDataById(this.url, ID, "roomcategory/getListByIdAction");
    }

    saveRoomCategoryRecord(body: Object): Observable<RoomCategory> {
        return this.helperService.postAllData(this.url, body, "roomcategory/saveAction");
    }

    updateRoomCategoryRecord(body: Object): Observable<RoomCategory> {
        return this.helperService.postAllData(this.url, body, "roomcategory/updateAction");
    }

    //Room Detail
    getRoomDetailAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<RoomDetail>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, "roomdetail/getTableAction", filter1, filter2);
    }

    getRoomDetailAllData():Observable<RoomDetail> {
        return this.helperService.getAllData(this.url, "roomdetail/getListAction");
    }

    getRoomDetailByID (ID: string):Observable<RoomDetail> {
        return this.helperService.getDataById(this.url, ID, "roomdetail/getListByIdAction");
    }

    saveRoomDetailRecord(body: Object): Observable<RoomDetail> {
        return this.helperService.postAllData(this.url, body, "roomdetail/saveAction");
    }

    updateRoomDetailRecord(body: Object): Observable<RoomDetail> {
        return this.helperService.postAllData(this.url, body, "roomdetail/updateAction");
    }

    //Room Bed
    getRoomBedAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<RoomBed>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, "roombed/getTableAction", filter1);
    }

    getRoomBedAllData():Observable<RoomBed> {
        return this.helperService.getAllData(this.url, "roombed/getListAction");
    }

    getRoomBedByID (ID: string):Observable<RoomBed> {
        return this.helperService.getDataById(this.url, ID, "roombed/getListByIdAction");
    }

    saveRoomBedRecord(body: Object): Observable<RoomBed> {
        return this.helperService.postAllData(this.url, body, "roombed/saveAction");
    }

    updateRoomBedRecord(body: Object): Observable<RoomBed> {
        return this.helperService.postAllData(this.url, body, "roombed/updateAction");
    }

    //Additional
    getRoomDetailByCategoryId(ID: string):Observable<RoomDetail> {
        return this.helperService.getDataById(this.url, ID, "roomdetail/getListByCategoryIdAction");
    }

    getRoomBedByDetailId(ID: string):Observable<RoomDetail> {
        return this.helperService.getDataById(this.url, ID, "roombed/getListByDetailIdAction");
    }

    getcountRoomByDetail():Observable<PaginationPage<CountDomain>> {
        return this.helperService.getAllData(this.url, "roombed/countRoomByDetailIdAction");
    }
}