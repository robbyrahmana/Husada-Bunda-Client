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

import { RoomDetail }                               from '../../../service/domain/room/room.domain';
import { RoomService }                              from '../../../service/intercept/room/room.service';

import { CountDomain }                          from '../../../service/domain/countDomain';


@Component({
  templateUrl: './roomDetail.site.html'
})
export class RoomDetailSite extends ListHelper implements List {

    // Variable
    dataPage: PaginationPage<RoomDetail>;
    self: RoomDetailSite; 
    paginationData = new PaginationData(0, 5, 1, 10);

    //Filter purpose
    filter1: string = "";
    filter2: string = "";

    roomcount: any = null;

    //Method
    constructor(globalConstant: GlobalConstant, router: Router, dataService : RoomService) {
        super(globalConstant, router, dataService);
        this.generateConfig("roomdetail");
        let observable: Observable<PaginationPage<RoomDetail>> = this.fetchPage(0, 10, null, "", "");
        this.self = this;
    }

    filterData() {
        this.fetchPage(0, 10, null, this.filter1, this.filter2);
        this.paginationData = new PaginationData(0, 5, 1, 10);
    }

    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string = null, filter2: string = null, filter3: string = null, filter4: string = null, filter5: string = null): Observable<PaginationPage<any>> {
        let observable: Observable<PaginationPage<any>> = this.dataService.getRoomDetailAllTable(pageNumber, pageSize, sort, filter1, filter2);
        observable.subscribe(dataPage => {
            let observable: Observable<PaginationPage<CountDomain>> = this.dataService.getcountRoomByDetail();
            observable.subscribe(data => { 
                this.dataPage = dataPage;
                this.roomcount = new CountDomain();
                this.roomcount = data;
            });
        });
        return observable;
    }

    getCount(id: any) {
        var data =  this.roomcount.find(x => x.id === id);
        return data;
    }

    delete(data: string) {
        alert("Delete" + data);
    }

    get diagnostic() { return JSON.stringify(this.dataPage); }
}