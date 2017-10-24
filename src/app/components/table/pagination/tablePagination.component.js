"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TablePaginationComponent = (function () {
    function TablePaginationComponent() {
        this.filter1 = "";
        this.filter2 = "";
        this.filter3 = "";
        this.filter4 = "";
        this.filter5 = "";
        this.filter6 = "";
        this.output = new core_1.EventEmitter();
    }
    /*private startPage: number;
    private endPage: number;

    private from: number;
    private to: number;*/
    TablePaginationComponent.prototype.ngOnInit = function () {
        /*this.startPage = 0;
        this.endPage = this.startPage + 5;
        this.from = 1;
        this.to = 10;*/
    };
    Object.defineProperty(TablePaginationComponent.prototype, "pagesIndexes", {
        get: function () {
            var pagesIndexes = [];
            for (var i = 0; i < this.page.totalPages; i++) {
                pagesIndexes.push(i + 1);
            }
            return pagesIndexes.slice(this.pageData.startPage, this.pageData.endPage);
        },
        enumerable: true,
        configurable: true
    });
    TablePaginationComponent.prototype.fetchPageNumber = function (pageNumer) {
        var observable = this.table.fetchPage(pageNumer - 1, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
        if ((pageNumer - 1) == 0) {
            this.pageData.startPage = 0;
            this.pageData.endPage = 5;
        }
        else if (pageNumer == this.page.totalPages) {
            this.pageData.startPage = this.page.totalPages - 5;
            this.pageData.endPage = this.page.totalPages;
        }
        else {
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
    };
    TablePaginationComponent.prototype.fetchPageSize = function (pageSize) {
        var observable = this.table.fetchPage(pageSize, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
    };
    TablePaginationComponent.prototype.fetchNextPage = function () {
        if (this.page.number + 1 >= this.page.totalPages) {
            return;
        }
        var observable = this.table.fetchPage(this.page.number + 1, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
        if (this.page.number == (this.pageData.endPage - 2) && this.pageData.endPage != this.page.totalPages) {
            this.pageData.startPage += 1;
            this.pageData.endPage += 1;
        }
        else {
        }
        var count = (this.page.number + 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
        if (this.pageData.to > this.page.totalElements) {
            this.pageData.to = this.page.totalElements;
        }
    };
    TablePaginationComponent.prototype.fetchPreviousPage = function () {
        if (this.page.number == 0) {
            return;
        }
        var observable = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
        if ((this.page.number == (this.pageData.startPage) && this.pageData.startPage >= 0)) {
            this.pageData.startPage -= 1;
            this.pageData.endPage -= 1;
        }
        var count = (this.page.number - 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
    };
    TablePaginationComponent.prototype.fetchFirstPage = function () {
        this.page.number = 0;
        var observable = this.table.fetchPage(this.page.number, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
        this.pageData.startPage = 0;
        this.pageData.endPage = 5;
        this.pageData.from = 1;
        this.pageData.to = 10;
    };
    TablePaginationComponent.prototype.fetchLastPage = function () {
        this.page.number = this.page.totalPages - 1;
        var observable = this.table.fetchPage(this.page.number, this.page.size, this.getSort(), this.filter1, this.filter2, this.filter3, this.filter4, this.filter5);
        this.pageData.startPage = this.page.totalPages - 5;
        this.pageData.endPage = this.page.totalPages;
        var count = (this.page.totalPages - 1) * 10;
        this.pageData.from = count + 1;
        this.pageData.to = count + 10;
        if (this.pageData.to > this.page.totalElements) {
            this.pageData.to = this.page.totalElements;
        }
    };
    TablePaginationComponent.prototype.getSort = function () {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        }
        else {
            return null;
        }
    };
    return TablePaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablePaginationComponent.prototype, "table", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter1", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter2", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter3", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter4", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter5", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TablePaginationComponent.prototype, "filter6", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablePaginationComponent.prototype, "pageData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TablePaginationComponent.prototype, "page", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TablePaginationComponent.prototype, "output", void 0);
TablePaginationComponent = __decorate([
    core_1.Component({
        selector: 'table-pagination-component',
        templateUrl: './tablePagination.component.html'
    })
], TablePaginationComponent);
exports.TablePaginationComponent = TablePaginationComponent;
//# sourceMappingURL=tablePagination.component.js.map