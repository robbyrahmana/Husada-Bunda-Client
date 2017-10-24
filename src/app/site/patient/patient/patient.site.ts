import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { Router }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ReportPatientDetail }                      from '../../../report/report_patient_detail';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { Patient }                                  from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

@Component({
    selector: "patient-table",
    templateUrl: './patient.site.html'
})
export class PatientSite extends ListHelper implements List {

    //For modal
    @Input() modal: boolean = false;
    @Output() output = new EventEmitter<any>();

    selectData(data: any) {
        this.output.emit(data);
    }

    // Variable
    dataPage: PaginationPage<Patient>;
    self: PatientSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    report:ReportPatientDetail = new ReportPatientDetail();

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : PatientService) {
        super(globalConstant, router, dataService);
        this.generateConfig("patient");
        let observable: Observable<PaginationPage<Patient>> = this.fetchPage(0, 10, null, "", "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientAllTable(pageNumber, pageSize, sort, filter1, filter2);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }

    download(data: any) {
        this.report.download(data);
    }
}