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

import { Medicine }                                 from '../../../service/domain/apoteker/apoteker.domain';
import { ApotekerService }                          from '../../../service/intercept/apoteker/apoteker.service';


@Component({
  templateUrl: './medicine.site.html'
})
export class MedicineSite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<Medicine>;
    self: MedicineSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    tempid: string = "";

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : ApotekerService) {
        super(globalConstant, router, dataService);
        this.generateConfig("medicinemaster");
        let observable: Observable<PaginationPage<Medicine>> = this.fetchPage(0, 10, null, "", "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getMedicineAllTable(pageNumber, pageSize, sort, filter1, filter2);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    viewConvert(data) {
        this.tempid = data;
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}