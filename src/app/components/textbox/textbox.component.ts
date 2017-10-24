//our root app component
import {Component, ElementRef, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import { FieldErrors }                          from '../../service/domain/error/error.domain';
import { GlobalConstant }                       from '../../helper/globalConstant';

@Component({
    selector: "textbox-component",
    template: `
        <div class="form-group {{isError ? 'has-error' : ''}}">
            <label for="{{id}}" class="col-sm-2 control-label"><ng-content></ng-content></label>
            <div class="col-sm-10">
                <div class="fg-line">
                    <input type='text' 
                        id = "{{id}}" 
                        name = "{{id}}"
                        class="form-control" 
                        value="{{value}}" 
                        #data 
                        (blur)="asignValue(data.value)" 
                        placeholder="{{text}}" [disabled]="editMode">
                </div>
                <small class="help-block">{{errMsg}}</small>
            </div>
        </div>
        <div class="clearfix" *ngFor="let val of error">{{id == val.field ? errorFound(val.message) : noError()}}</div>
    `
})
export class TextBoxComponent implements OnChanges {
    isError: boolean;
    errMsg: string;

    msgData: string[];
    
    @Input() value      :  string;
    @Input() id         :  string;
    @Input() editMode   :  boolean;
    @Input() error      :  FieldErrors;
    @Output() output = new EventEmitter<any>();

    constructor(private globalConstant: GlobalConstant) {}
    
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.noError();
    }
    
    asignValue(data: any) {
        this.output.emit(data);
    }

    errorFound(msg: string) {
        this.isError = true;
        this.msgData = msg.split(",");
        
        if(this.globalConstant.text_format == "en_US") {
            msg = this.msgData[0];
        } else {
            msg = this.msgData[1];
        }

        this.errMsg = msg;
    }

    noError() {
        this.isError = false;
        this.errMsg = "";
    }
}