//our root app component
import {Component, Directive, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core'
import { FieldErrors }                          from '../../service/domain/error/error.domain';
import { GlobalConstant }                       from '../../helper/globalConstant';

@Directive({
  selector: "[datepicker]"
})
export class DatePicker {
    constructor(el: ElementRef) {
        jQuery(el.nativeElement).datetimepicker({
    	    format: 'DD/MM/YYYY',
            widgetPositioning: {
                vertical: 'auto',
            }
    	});
    }
}

@Component({
    selector: "datepicker-component",
    template: `
        <div class="form-group {{isError ? 'has-error' : ''}}">
            <label for="{{id}}" class="col-sm-2 control-label"><ng-content></ng-content></label>
            <div class="col-sm-10">
                <div class="fg-line">
                    <input type='text' 
                        id = "{{id}}" 
                        name = "{{id}}"
                        class="form-control" 
                        value="{{value | date : 'dd/MM/yyyy'}}" 
                        #data 
                        (blur)="asignValue(data.value)" 
                        datepicker 
                        placeholder="{{text}}" [disabled]="editMode">
                </div>
                <small class="help-block">{{errMsg}}</small>
            </div>
        </div>
        <div class="clearfix" *ngFor="let val of error">{{id == val.field ? errorFound(val.message) : noError()}}</div>
    `
})
export class DatePickerComponent  implements OnChanges {
    isError: boolean;
    errMsg: string;

    msgData: string[];

    @Input() value      :  Date = new Date();
    @Input() id         :  string;
    @Input() editMode   :  boolean;
    @Input() error      :  FieldErrors;
    @Output() output = new EventEmitter<Date>();

    constructor(private globalConstant: GlobalConstant) {}
    
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.noError();
    }

    asignValue(data: any) {
        data = data.split("/")
        this.output.emit(new Date(data[2], data[1] - 1, data[0]));
    }

    errorFound(msg: string) {
        this.isError = true;
        this.msgData = msg.split(",");
        
        if(this.globalConstant.text_format == "ind") {
            msg = this.msgData[1];
        } else {
            msg = this.msgData[0];
        }

        this.errMsg = msg;
    }

    noError() {
        this.isError = false;
        this.errMsg = "";
    }
}