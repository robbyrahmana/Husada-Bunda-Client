import { Component, OnInit, Input, Output, EventEmitter }         from '@angular/core';
import { PaginationPage , PaginationPropertySort }  from '../pagination';
import { Table }                                    from '../table';
import * as Rx                                      from "rxjs/Rx";

@Component({
  selector      : 'table-pagination-component',
  templateUrl   : './tablePagination.component.html'
})
export class TablePaginationComponent implements OnInit {

    @Input() table:Table;
    @Input() filter1:string = "";
    @Input() filter2:string = "";
    @Input() filter3:string = "";
    @Input() filter4:string = "";
    @Input() filter5:string = "";
    @Input() filter6:string = "";
    @Input() pageData:any;
    @Input() page:PaginationPage<any>;

    @Output() output = new EventEmitter<any>();

    /*private startPage: number;
    private endPage: number;

    private from: number;
    private to: number;*/

    ngOnInit() {
        /*this.startPage = 0;
        this.endPage = this.startPage + 5;
        this.from = 1;
        this.to = 10;*/
    }

    get pagesIndexes():Array<number> {
        let pagesIndexes:Array<number> = [];
        for (let i = 0; i < this.page.totalPages; i++) {
            pagesIndexes.push(i + 1);
        }
        return pagesIndexes.slice(this.pageData.startPage, this.pageData.endPage);
    }

    fetchPageNumber(pageNumer:number) {
        let observable:Rx.Observable<any> = this.table.fetchPage(pageNumer - 1, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
        if ((pageNumer - 1) == 0) {
            this.pageData.startPage = 0;
            this.pageData.endPage = 5;
        } else if (pageNumer == this.page.totalPages) {
            this.pageData.startPage = this.page.totalPages - 5;
            this.pageData.endPage = this.page.totalPages;
        } else {
            this.pageData.startPage = pageNumer - 1;
            this.pageData.endPage = pageNumer - 1 + 5;
        }

        if (this.pageData.startPage < 0) {
            this.pageData.startPage = 0;
            this.pageData.endPage = 5;
        }

        if (this.pageData.endPage > this.page.totalPages) {
            this.pageData.startPage = this.page.totalPages - 5;
            this.pageData.endPage = this.page.totalPages;
        }

        var count = (pageNumer - 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
        if (this.pageData.to > this.page.totalElements) {
            this.pageData.to = this.page.totalElements;
        }
    }

    fetchPageSize(pageSize:number) {
        let observable:Rx.Observable<any> = this.table.fetchPage(pageSize, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
    }

    fetchNextPage() {
        if (this.page.number + 1 >= this.page.totalPages) {
            return;
        }

        let observable:Rx.Observable<any> = this.table.fetchPage(this.page.number + 1, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
        if (this.page.number == (this.pageData.endPage - 2) && this.pageData.endPage != this.page.totalPages) {
            this.pageData.startPage += 1;
            this.pageData.endPage += 1;
        } else {

        }

        var count = (this.page.number + 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
        if (this.pageData.to > this.page.totalElements) {
            this.pageData.to = this.page.totalElements;
        }
    }

    fetchPreviousPage() {
        if (this.page.number == 0) {
            return;
        }

        let observable:Rx.Observable<any> = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
        if ((this.page.number == (this.pageData.startPage) && this.pageData.startPage >= 0)) {
            this.pageData.startPage -= 1;
            this.pageData.endPage -= 1;
        }
        var count = (this.page.number - 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
    }

    fetchFirstPage() {
        this.page.number = 0;
        let observable:Rx.Observable<any> = this.table.fetchPage(this.page.number, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
        this.pageData.startPage = 0;
        this.pageData.endPage = 5;
        this.pageData.from = 1;
        this.pageData.to = 10;
    }

    fetchLastPage() {
        this.page.number = this.page.totalPages - 1;
        let observable:Rx.Observable<any> = this.table.fetchPage(this.page.number, this.page.size, this.getSort(), this.filter1 , this.filter2, this.filter3, this.filter4, this.filter5);
        this.pageData.startPage = this.page.totalPages - 5;
        this.pageData.endPage = this.page.totalPages;
        
        var count = (this.page.totalPages - 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
        if (this.pageData.to > this.page.totalElements) {
            this.pageData.to = this.page.totalElements;
        }
    }

    private getSort():PaginationPropertySort {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        } else {
            return null;
        }
    }
}