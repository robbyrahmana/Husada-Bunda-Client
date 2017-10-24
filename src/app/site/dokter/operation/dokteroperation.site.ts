import { Component}                                 from '@angular/core';
import { Router }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { PatientOperationDetails }                               from '../../../service/domain/patient/patient.domain';
import { PatientService }                       from '../../../service/intercept/patient/patient.service';

@Component({
  templateUrl: './dokteroperation.site.html'
})
export class DokterOperationSite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<PatientOperationDetails>;
    self: DokterOperationSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose
    filter1: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : PatientService) {
        super(globalConstant, router, dataService);
        this.generateConfig("doktermanageroperation");
        let observable: Observable<PaginationPage<PatientOperationDetails>> = this.fetchPage(0, 10, null, "49ebc9cf-6a42-491c-a782-41c0d2ba9a66");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientOperationDetailsAllTableByDokterId(pageNumber, pageSize, sort, filter1);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}