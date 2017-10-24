import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { Router }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { MedicineUnitConverter, Medicine }          from '../../../service/domain/apoteker/apoteker.domain';
import { ApotekerService }                          from '../../../service/intercept/apoteker/apoteker.service';

@Component({
    selector: "unit-convert",
    templateUrl: './unitconvert.site.html'
})
export class UnitConverterSite extends ListHelper implements List, OnChanges {

    @Input() data: Medicine = new Medicine();
    tempid : string = "";
    // Variable
    dataPage: PaginationPage<MedicineUnitConverter>;
    self: UnitConverterSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.filterDataNew(this.data.id);
    }

    ngOnInit() {
        let observable: Observable<PaginationPage<MedicineUnitConverter>> = this.fetchPage(0, 10, null, this.data.id);
    }

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : ApotekerService) {
        super(globalConstant, router, dataService);
        this.generateConfig("medicineunitconverter");
        let observable: Observable<PaginationPage<MedicineUnitConverter>> = this.fetchPage(0, 10, null, "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.data.id);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    filterDataNew(id: any) {
        this.fetchPage(0, 10, null, id);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getMedicineUnitConverterAllTable(pageNumber, pageSize, sort, filter1);
        observable.subscribe(dataPage => {
            this.dataPage = dataPage;
        });
        return observable;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    submitClick() {
        this.tempid = "";
        this.filterDataNew(this.data.id);
    }

    detailNew(id: any) {
        this.tempid = id;
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}