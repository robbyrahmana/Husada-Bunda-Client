/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import * as Rx                                                      from "rxjs/Rx";
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { Status }                                             from '../../domain/status/status.domain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

@Injectable()
export class StatusService {
    
    constructor (private helperService: HelperService) {
    }

    /* serviceUrl */
    private url = "status";

    getAllData () : Rx.Observable<Status> {
        return this.helperService.getAllData(this.url);
    }

    getByID(id: string): Rx.Observable<Status> {
        return this.helperService.getDataById(this.url, id);
    }
}