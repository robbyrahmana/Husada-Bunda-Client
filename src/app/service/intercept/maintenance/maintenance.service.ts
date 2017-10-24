/* Default module */
import { Injectable }                           from '@angular/core';
import { Response }                             from '@angular/http';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, 
    PaginationPropertySort }                    from '../../../components/table/pagination';
/* Domain module */
import { 
        Title, 
        BloodGroup, 
        Gender, 
        Religion, 
        Insurance, 
        Unit,
        Education,
        Identity,
        Relationship,
        Rhesus,
        Tribe,
        Work 
        }                                       from '../../domain/maintenance/maintenance.domain';
import { CountDomain }                          from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                        from '../../helper/helper.service';

import { globalIntercept }                      from '../globalIntercept';

@Injectable()
export class MaintenanceService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "maintenance";
    
    private childurl = [
        "bloodgroup",
        "gender",
        "insurance",
        "religion",
        "title",
        "unit",
        "education",
        "identity",
        "relationship",
        "rhesus",
        "tribe",
        "work"
    ];

    //Golongan Darah =============================================================================================
    getBloodGroupAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<BloodGroup>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction");
    }

    getBloodGroupAllData():Observable<BloodGroup> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getBloodGroupByID (ID: string):Observable<BloodGroup> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    saveBloodGroupRecord(body: Object): Observable<BloodGroup> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updateBloodGroupRecord(body: Object): Observable<BloodGroup> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //Gender =============================================================================================
    getGenderAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Gender>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction");
    }

    getGenderAllData():Observable<Gender> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getGenderByID (ID: string):Observable<Gender> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    saveGenderRecord(body: Object): Observable<Gender> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updateGenderRecord(body: Object): Observable<Gender> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/updateAction");
    }

    //Insurance =============================================================================================
    getInsuranceAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Insurance>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[2] + "/getTableAction");
    }

    getInsuranceAllData():Observable<Insurance> {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    }

    getInsuranceByID (ID: string):Observable<Insurance> {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    }

    saveInsuranceRecord(body: Object): Observable<Insurance> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    }

    updateInsuranceRecord(body: Object): Observable<Insurance> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    }

    //Religion =============================================================================================
    getReligionAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Religion>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[3] + "/getTableAction");
    }

    getReligionAllData():Observable<Religion> {
        return this.helperService.getAllData(this.url, this.childurl[3] + "/getListAction");
    }

    getReligionByID (ID: string):Observable<Religion> {
        return this.helperService.getDataById(this.url, ID, this.childurl[3] + "/getListByIdAction");
    }

    saveReligionRecord(body: Object): Observable<Religion> {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/saveAction");
    }

    updateReligionRecord(body: Object): Observable<Religion> {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/updateAction");
    }

    //Title =============================================================================================
    getTitleAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Title>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[4] + "/getTableAction");
    }

    getTitleAllData():Observable<Title> {
        return this.helperService.getAllData(this.url, this.childurl[4] + "/getListAction");
    }

    getTitleByID (ID: string):Observable<Title> {
        return this.helperService.getDataById(this.url, ID, this.childurl[4] + "/getListByIdAction");
    }

    saveTitleRecord(body: Object): Observable<Title> {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/saveAction");
    }

    updateTitleRecord(body: Object): Observable<Title> {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/updateAction");
    }

    //Unit =============================================================================================
    getUnitAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Unit>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[5] + "/getTableAction");
    }

    getUnitAllData():Observable<Unit> {
        return this.helperService.getAllData(this.url, this.childurl[5] + "/getListAction");
    }

    getUnitByID (ID: string):Observable<Unit> {
        return this.helperService.getDataById(this.url, ID, this.childurl[5] + "/getListByIdAction");
    }

    saveUnitRecord(body: Object): Observable<Unit> {
        return this.helperService.postAllData(this.url, body, this.childurl[5] + "/saveAction");
    }

    updateUnitRecord(body: Object): Observable<Unit> {
        return this.helperService.postAllData(this.url, body, this.childurl[5] + "/updateAction");
    }

    //Education =============================================================================================
    getEducationAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Education>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[6] + "/getTableAction");
    }

    getEducationAllData():Observable<Education> {
        return this.helperService.getAllData(this.url, this.childurl[6] + "/getListAction");
    }

    getEducationByID (ID: string):Observable<Education> {
        return this.helperService.getDataById(this.url, ID, this.childurl[6] + "/getListByIdAction");
    }

    saveEducationRecord(body: Object): Observable<Education> {
        return this.helperService.postAllData(this.url, body, this.childurl[6] + "/saveAction");
    }

    updateEducationRecord(body: Object): Observable<Education> {
        return this.helperService.postAllData(this.url, body, this.childurl[6] + "/updateAction");
    }

    //Identity =============================================================================================
    getIdentityAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Identity>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[7] + "/getTableAction");
    }

    getIdentityAllData():Observable<Identity> {
        return this.helperService.getAllData(this.url, this.childurl[7] + "/getListAction");
    }

    getIdentityByID (ID: string):Observable<Identity> {
        return this.helperService.getDataById(this.url, ID, this.childurl[7] + "/getListByIdAction");
    }

    saveIdentityRecord(body: Object): Observable<Identity> {
        return this.helperService.postAllData(this.url, body, this.childurl[7] + "/saveAction");
    }

    updateIdentityRecord(body: Object): Observable<Identity> {
        return this.helperService.postAllData(this.url, body, this.childurl[7] + "/updateAction");
    }

    //Relationship =============================================================================================
    getRelationshipAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Relationship>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[8] + "/getTableAction");
    }

    getRelationshipAllData():Observable<Relationship> {
        return this.helperService.getAllData(this.url, this.childurl[8] + "/getListAction");
    }

    getRelationshipByID (ID: string):Observable<Relationship> {
        return this.helperService.getDataById(this.url, ID, this.childurl[8] + "/getListByIdAction");
    }

    saveRelationshipRecord(body: Object): Observable<Relationship> {
        return this.helperService.postAllData(this.url, body, this.childurl[8] + "/saveAction");
    }

    updateRelationshipRecord(body: Object): Observable<Relationship> {
        return this.helperService.postAllData(this.url, body, this.childurl[8] + "/updateAction");
    }

    //Rhesus =============================================================================================
    getRhesusAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Rhesus>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[9] + "/getTableAction");
    }

    getRhesusAllData():Observable<Rhesus> {
        return this.helperService.getAllData(this.url, this.childurl[9] + "/getListAction");
    }

    getRhesusByID (ID: string):Observable<Rhesus> {
        return this.helperService.getDataById(this.url, ID, this.childurl[9] + "/getListByIdAction");
    }

    saveRhesusRecord(body: Object): Observable<Rhesus> {
        return this.helperService.postAllData(this.url, body, this.childurl[9] + "/saveAction");
    }

    updateRhesusRecord(body: Object): Observable<Rhesus> {
        return this.helperService.postAllData(this.url, body, this.childurl[9] + "/updateAction");
    }

    //Tribe =============================================================================================
    getTribeAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Tribe>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[10] + "/getTableAction");
    }

    getTribeAllData():Observable<Tribe> {
        return this.helperService.getAllData(this.url, this.childurl[10] + "/getListAction");
    }

    getTribeByID (ID: string):Observable<Tribe> {
        return this.helperService.getDataById(this.url, ID, this.childurl[10] + "/getListByIdAction");
    }

    saveTribeRecord(body: Object): Observable<Tribe> {
        return this.helperService.postAllData(this.url, body, this.childurl[10] + "/saveAction");
    }

    updateTribeRecord(body: Object): Observable<Tribe> {
        return this.helperService.postAllData(this.url, body, this.childurl[10] + "/updateAction");
    }

    //Work =============================================================================================
    getWorkAllTable (page: number, pageSize: number, sort: PaginationPropertySort):Observable<PaginationPage<Work>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[11] + "/getTableAction");
    }

    getWorkAllData():Observable<Work> {
        return this.helperService.getAllData(this.url, this.childurl[11] + "/getListAction");
    }

    getWorkByID (ID: string):Observable<Work> {
        return this.helperService.getDataById(this.url, ID, this.childurl[11] + "/getListByIdAction");
    }

    saveWorkRecord(body: Object): Observable<Work> {
        return this.helperService.postAllData(this.url, body, this.childurl[11] + "/saveAction");
    }

    updateWorkRecord(body: Object): Observable<Work> {
        return this.helperService.postAllData(this.url, body, this.childurl[11] + "/updateAction");
    }
}