//our root app component
import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: "table-filter-component",
    template: `
        <div class="card-header">
            <a class="btn-icon-text waves-effect" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="zmdi zmdi-search"></i> Filter Data</a>
            <div class="collapse m-t-20" id="collapseExample">
            <form class="row p-l-20" role="form">

                <ng-content></ng-content>
                          
                <div class="col-sm-2">
                    <button class="btn btn-primary btn-icon btn-sm waves-effect waves-circle" (click)="filterData()"><i class="zmdi zmdi-search"></i></button>
                </div>
            </form>
            </div>
        </div>
    `
})
export class TableFilterComponent {
    @Input() data       :  any;
    @Output() output = new EventEmitter<any>();

    filterData() {
        this.output.emit();
    }
}