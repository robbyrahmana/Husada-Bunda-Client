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

import { BloodGroup }                               from '../../../service/domain/maintenance/maintenance.domain';

import { MaintenanceService }                       from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './bloodGroup.site.html'
})
export class BloodGroupSite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<BloodGroup>;
    self: BloodGroupSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : MaintenanceService) {
        super(globalConstant, router, dataService);
        this.generateConfig("bloodgroup");
        let observable: Observable<PaginationPage<BloodGroup>> = this.fetchPage(0, 10, null);
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getBloodGroupAllTable(pageNumber, pageSize, sort);
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