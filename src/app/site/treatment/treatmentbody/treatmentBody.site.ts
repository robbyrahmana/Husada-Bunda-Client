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

import { TreatmentBody }                             from '../../../service/domain/treatment/treatment.domain';
import { TreatmentService }                         from '../../../service/intercept/treatment/treatment.service';

@Component({
  templateUrl: './treatmentBody.site.html'
})
export class TreatmentBodySite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<TreatmentBody>;
    self: TreatmentBodySite; 
    paginationData = new PaginationData(0, 5, 1, 100);

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : TreatmentService) {
        super(globalConstant, router, dataService);
        this.generateConfig("treatmentbody");
        let observable: Observable<PaginationPage<TreatmentBody>> = this.fetchPage(0, 100, null, "", "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 100, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 100);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getTreatmentBodyAllTable(pageNumber, pageSize, sort, filter1, filter2);
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