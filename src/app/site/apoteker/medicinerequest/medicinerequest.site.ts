import { Component, Input, OnChanges, SimpleChange}                                 from '@angular/core';
import { Router }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { PatientMedicine }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

@Component({
    templateUrl: './medicinerequest.site.html'
})
export class MedicineRequestSite extends ListHelper implements List, OnChanges {

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.filterData();
    }

    tempid: string = "";

    // Variable
    dataPage: PaginationPage<PatientMedicine>;
    self: MedicineRequestSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose
    filter1: string = "b238fe40-5037-11e7-b7c8-02004e435049"; //Status New
    filter2: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : PatientService) {
        super(globalConstant, router, dataService);
        this.generateConfig("medicinemanager");
        let observable: Observable<PaginationPage<PatientMedicine>> = this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientMedicineAllTableByStatusId(pageNumber, pageSize, sort, filter1, filter2, filter3, filter4, filter5);
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