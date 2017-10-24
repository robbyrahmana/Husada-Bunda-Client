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

import { Unit }                                    from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                       from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './unit.site.html'
})
export class UnitSite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<Unit>;
    self: UnitSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : MaintenanceService) {
        super(globalConstant, router, dataService);
        this.generateConfig("masterunit");
        let observable: Observable<PaginationPage<Unit>> = this.fetchPage(0, 10, null, "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getUnitAllTable(pageNumber, pageSize, sort);
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