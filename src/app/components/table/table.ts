import { PaginationPropertySort }   from './pagination';
import * as Rx                      from "rxjs/Rx";

export interface Table {
    fetchPage( 
        pageNumber:number, 
        pageSize:number, 
        sort:PaginationPropertySort,
        filter1: string, 
        filter2: string, 
        filter3: string, 
        filter4: string, 
        filter5: string
    ): Rx.Observable<any>;
}