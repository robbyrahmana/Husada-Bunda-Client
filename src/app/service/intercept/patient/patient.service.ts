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
            Patient, 
            PatientAdministration, 
            PatientTreatment, 
            PatientMedicine, 
            PatientMedicineDetails,
            PatientOperation,
            PatientOperationDetails
        }                                               from '../../domain/patient/patient.domain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class PatientService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "patient";
    
    private childurl = [
                            "patient",
                            "patientadministration",
                            "patienttreatment",
                            "patientmedicine",
                            "patientmedicinedetails",
                            "patientoperation",
                            "patientoperationdetails"
                        ];

    //Patient
    getPatientAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<Patient>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[0] + "/getTableAction", filter1, filter2);
    }

    getPatientAllData():Observable<Patient> {
        return this.helperService.getAllData(this.url, this.childurl[0] + "/getListAction");
    }

    getPatientByID (ID: string):Observable<Patient> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getListByIdAction");
    }

    savePatientRecord(body: Object): Observable<Patient> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/saveAction");
    }

    updatePatientRecord(body: Object): Observable<Patient> {
        return this.helperService.postAllData(this.url, body, this.childurl[0] + "/updateAction");
    }

    //PatientAdministration
    getPatientAdministrationAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string, filter3: string, filter4: string, filter5: string):Observable<PaginationPage<PatientAdministration>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableAction", filter1, filter2, filter3, filter4, filter5);
    }

    getPatientAdministrationAllTableByDokterId (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<PatientAdministration>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[1] + "/getTableActionByDokterId", filter1);
    }

    getPatientAdministrationAllData():Observable<PatientAdministration> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    getPatientAdministrationByID (ID: string):Observable<PatientAdministration> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/getListByIdAction");
    }

    savePatientAdministrationRecord(body: Object): Observable<PatientAdministration> {
        return this.helperService.postAllData(this.url, body, this.childurl[1] + "/saveAction");
    }

    updatePatientAdministrationStatusById(ID: string): Observable<PatientMedicine> {
        return this.helperService.getDataById(this.url, ID, this.childurl[1] + "/updateStatusById");
    }

    //PatientTreatment
    getPatientTreatmentAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string, filter3: string, filter4: string, filter5: string):Observable<PaginationPage<PatientTreatment>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[2] + "/getTableAction", filter1, filter2, filter3, filter5);
    }

    getPatientTreatmentAllTableByDokterId (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<PatientTreatment>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[2] + "/getTableActionByDokterId", filter1);
    }

    getPatientTreatmentAllData():Observable<PatientTreatment> {
        return this.helperService.getAllData(this.url, this.childurl[2] + "/getListAction");
    }

    getPatientTreatmentByID (ID: string):Observable<PatientTreatment> {
        return this.helperService.getDataById(this.url, ID, this.childurl[2] + "/getListByIdAction");
    }

    savePatientTreatmentRecord(body: Object): Observable<PatientTreatment> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    }

    updatePatientTreatmentRecord(body: Object): Observable<PatientTreatment> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    }

    //PatientMedicine
    getPatientMedicineAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1:string = null, filter2:string=null, filter3:string = null, filter4:string = null, filter5:string = null):Observable<PaginationPage<PatientMedicine>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[3] + "/getTableAction", filter1, filter2, filter3, filter4, filter5);
    }
    getPatientMedicineAllTableByStatusId (page: number, pageSize: number, sort: PaginationPropertySort, filter1:string = null, filter2:string=null, filter3:string = null, filter4:string = null, filter5:string = null):Observable<PaginationPage<PatientMedicine>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[3] + "/getTableActionByStatusId", filter1, filter2, filter3, filter4, filter5);
    }

    getPatientMedicineAllData():Observable<PatientMedicine> {
        return this.helperService.getAllData(this.url, this.childurl[3] + "/getListAction");
    }

    getPatientMedicineByID (ID: string):Observable<PatientMedicine> {
        return this.helperService.getDataById(this.url, ID, this.childurl[3] + "/getListByIdAction");
    }

    savePatientMedicineRecord(body: Object): Observable<PatientMedicine> {
        return this.helperService.postAllData(this.url, body, this.childurl[3] + "/saveAction");
    }

    updatePatientMedicineStatusById(ID: string): Observable<PatientMedicine> {
        return this.helperService.getDataById(this.url, ID, this.childurl[3] + "/updateStatusById");
    }

    //PatientMedicineDetails
    getPatientMedicineDetailsAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<PatientMedicineDetails>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[4] + "/getTableAction", filter1);
    }

    getPatientMedicineDetailsAllData():Observable<PatientMedicineDetails> {
        return this.helperService.getAllData(this.url, this.childurl[4] + "/getListAction");
    }

    getPatientMedicineDetailsByID (ID: string):Observable<PatientMedicineDetails> {
        return this.helperService.getDataById(this.url, ID, this.childurl[4] + "/getListByIdAction");
    }

    savePatientMedicineDetailsRecord(body: Object): Observable<PatientMedicineDetails> {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/saveAction");
    }

    updatePatientMedicineDetailsRecord(body: Object): Observable<PatientMedicineDetails> {
        return this.helperService.postAllData(this.url, body, this.childurl[4] + "/updateAction");
    }

    //PatientOperation
    getPatientOperationAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string, filter3: string):Observable<PaginationPage<PatientOperation>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[5] + "/getTableAction", filter1, filter2, filter3);
    }

    getPatientOperationAllData():Observable<PatientOperation> {
        return this.helperService.getAllData(this.url, this.childurl[5] + "/getListAction");
    }

    getPatientOperationByID (ID: string):Observable<PatientOperation> {
        return this.helperService.getDataById(this.url, ID, this.childurl[5] + "/getListByIdAction");
    }

    savePatientOperationRecord(body: Object): Observable<PatientOperation> {
        return this.helperService.postAllData(this.url, body, this.childurl[5] + "/saveAction");
    }

    //PatientOperationDetails
    getPatientOperationDetailsAllTable (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string):Observable<PaginationPage<PatientOperationDetails>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[6] + "/getTableAction", filter1, filter2);
    }

    getPatientOperationDetailsAllTableByDokterId (page: number, pageSize: number, sort: PaginationPropertySort, filter1: string):Observable<PaginationPage<PatientOperationDetails>> {
        return this.helperService.getDataTable(this.url , page, pageSize, sort, this.childurl[6] + "/getTableActionByDokterId", filter1);
    }

    getPatientOperationDetailsAllData():Observable<PatientOperationDetails> {
        return this.helperService.getAllData(this.url, this.childurl[6] + "/getListAction");
    }

    getPatientOperationDetailsByID (ID: string):Observable<PatientOperationDetails> {
        return this.helperService.getDataById(this.url, ID, this.childurl[6] + "/getListByIdAction");
    }

    savePatientOperationDetailsRecord(body: Object): Observable<PatientOperationDetails> {
        return this.helperService.postAllData(this.url, body, this.childurl[6] + "/saveAction");
    }
	
	updatePatientOperationDetailsRecord(body: Object): Observable<PatientOperationDetails> {
        return this.helperService.postAllData(this.url, body, this.childurl[6] + "/updateAction");
    }
}