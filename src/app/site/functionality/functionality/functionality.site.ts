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

import { Functionality }                                   from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                     from '../../../service/intercept/functionality/functionality.service';


@Component({
  templateUrl: './functionality.site.html'
})
export class FunctionalitySite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<Functionality>;
    self: FunctionalitySite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    tempcd: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : FunctionalityService) {
        super(globalConstant, router, dataService);
        this.generateConfig("functionality");
        let observable: Observable<PaginationPage<Functionality>> = this.fetchPage(0, 10, null, "", "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getFunctionalityAllTable(pageNumber, pageSize, sort, filter1, filter2);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    modal(data: any) {
        this.tempcd = data;
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}