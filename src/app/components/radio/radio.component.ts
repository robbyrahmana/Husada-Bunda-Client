//our root app component
import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: "radio-component",
    template: `
        <div class="form-group">
            <label for="{{id}}" class="col-sm-2 control-label"><ng-content></ng-content></label>
            <div class="col-sm-10">
                <div class="fg-line">
                    <div class="radio m-b-15" *ngFor="let v of generateArray(data)">
                        <label>
                            <input type="radio" 
                            name = "{{id}}" 
                            [value]="v.id"  
                            [checked]="v.id === value"
                            [disabled]="editMode"
                            (click)="asignValue(v.id)">
                            <i class="input-helper"></i>
                            {{v.display}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class RadioComponent {
    @Input() data       :  any;
    @Input() value      :  any;
    @Input() id         :  string;
    @Input() editMode   :  boolean;
    @Output() output = new EventEmitter<any>();

    asignValue(data: any) {
        this.output.emit(data);
    }

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }
}