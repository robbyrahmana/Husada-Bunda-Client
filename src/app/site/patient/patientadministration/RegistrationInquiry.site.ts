import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter }                         from '@angular/core';
import { Router }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { PatientAdministration }                    from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

@Component({
    selector: "patientadministration-table",
    templateUrl: './RegistrationInquiry.site.html'
})
export class PatientAdministrationSite extends ListHelper implements List, OnChanges  {

    //For child
    @Input() child: boolean = false;
    @Input() modal: boolean = false;
    @Output() output = new EventEmitter<any>();
    @Input() filter1: string = "";
    @Input() filter2: string = "";
    @Input() filter3: string = "";

    selectData(data: any) {
        this.output.emit(data);
    }

    // Variable
    dataPage: PaginationPage<PatientAdministration>;
    self: PatientAdministrationSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.filterData();
    }

    ngOnInit() {
        if(this.child && !this.modal) {
            let observable: Observable<PaginationPage<PatientAdministration>> = this.fetchPage(0, 10, null, "dummy", this.filter2, this.filter3);
        } else {
            let observable: Observable<PaginationPage<PatientAdministration>> = this.fetchPage(0, 10, null, this.filter1, this.filter2, "OPN");
        }
    }

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : PatientService) {
        super(globalConstant, router, dataService);
        this.generateConfig("administration");
        this.self = this;
    }

    filterData() {
        if(this.child && !this.modal) {
            this.fetchPage(0, 10, null, this.filter1, this.filter2, this.filter3);
        } else {
            this.fetchPage(0, 10, null, this.filter1, this.filter2, "OPN");
        }
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientAdministrationAllTable(pageNumber, pageSize, sort, filter1, filter2, filter3, filter4, filter5);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    tes() {
        alert("tes");
    }

    detailNew(module: string, data: string) {
        this.router.navigate(["./site/" + module, data], { skipLocationChange: true });
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}