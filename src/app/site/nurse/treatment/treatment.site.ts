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

import { PatientTreatment }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

@Component({
    selector: 'treatment-details',
    templateUrl: './treatment.site.html'
})
export class PatientTreatmentSite extends ListHelper implements List, OnChanges {
    // to check if any component call this component use child variable
    @Input() child: any = false;
    @Input() filter3: string = "[All]";

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.filterData();
    }

    // Variable
    dataPage: PaginationPage<PatientTreatment>;
    self: PatientTreatmentSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : PatientService) {
        super(globalConstant, router, dataService);
        this.generateConfig("treatmentmanager");
        //let observable: Observable<PaginationPage<PatientTreatment>> = this.fetchPage(0, 10, null, this.filter1, this.filter2, this.statusFilter, this.filter3);
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2, this.filter3);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientTreatmentAllTable(pageNumber, pageSize, sort, filter1, filter2, filter3, filter4, filter5);
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