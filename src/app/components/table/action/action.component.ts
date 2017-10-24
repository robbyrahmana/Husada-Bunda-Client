import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-action-component',
  template: ` 
    <ul class="actions">
        <li *ngIf="detailFlag"><a style="cursor: pointer" (click)="detailEvent()"><i class="zmdi zmdi-edit"></i></a></li>
        <li *ngIf="printFlag"><a style="cursor: pointer" (click)="printEvent()"><i class="zmdi zmdi-print"></i></a></li>
        <li *ngIf="deleteFlag"><a style="cursor: pointer" (click)="deleteEvent()"><i class="zmdi zmdi-delete"></i></a></li>
        <li *ngIf="modalFlag"><a style="cursor: pointer" (click)="selectEvent()" data-dismiss="modal"><i class="zmdi zmdi-download"></i></a></li>
        <li *ngIf="converterFlag"><a style="cursor: pointer" (click)="convertEvent()" data-toggle="modal" href="#modalWider"><i class="zmdi zmdi-swap-alt"></i></a></li>
    </ul>
  `
})
export class TableActionComponent {
    @Input() deleteFlag: boolean = false;
    @Input() modalFlag: boolean = false;
    @Input() converterFlag: boolean = false;
    @Input() detailFlag: boolean = true;
    @Input() printFlag: boolean = false;
    @Output() detail = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() select = new EventEmitter<any>();
    @Output() convert = new EventEmitter<any>();
    @Output() print = new EventEmitter<any>();

    detailEvent() {
        this.detail.emit();
    }

    deleteEvent() {
        this.delete.emit();
    }

    selectEvent() {
        this.select.emit();
    }

    convertEvent() {
        this.convert.emit();
    }

    printEvent() {
        this.print.emit();
    }
}