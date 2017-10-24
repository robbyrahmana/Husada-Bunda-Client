import { Component, Input }                         from '@angular/core';
import { Router, ActivatedRoute }                                   from '@angular/router';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ListHelper, List }                         from '../../../helper/list/list.helper';

import { GlobalConstant }                           from '../../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../../components/table/pagination';
import { Table }                                    from '../../../components/table/table';

import { PaginationData }                           from '../../../components/table/paginationdata.domain';

import { PatientMedicineDetails, PatientMedicine }  from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

@Component({
    selector: "patient-medicine",
    templateUrl: './medicinedetails.site.html'
})
export class PatientMedicineDetailsSite extends ListHelper implements List {

    data: PatientMedicine = new PatientMedicine();
    tempid : string = "";
    // Variable
    dataPage: PaginationPage<PatientMedicineDetails>;
    self: PatientMedicineDetailsSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Method
    constructor(globalConstant: GlobalConstant,  router: Router, dataService : PatientService, private route: ActivatedRoute) {
        super(globalConstant, router, dataService);
        this.generateConfig("medicinedetailsmanager");
        this.self = this;
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.dataService.getPatientMedicineByID(params['id']).subscribe(data => {  
                    this.data = data;
                });
                let observable: Observable<PaginationPage<PatientMedicineDetails>> = this.fetchPage(0, 10, null, params['id']);
            }
        });
    }

    filterData() {
    }

    filterDataNew(id: any) {
        this.fetchPage(0, 10, null, id);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getPatientMedicineDetailsAllTable(pageNumber, pageSize, sort, filter1);
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