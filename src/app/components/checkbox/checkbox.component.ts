//our root app component
import {Component, ElementRef, Input, Output, EventEmitter, OnInit} from '@angular/core'

@Component({
    selector: "checkbox-component",
    template: `
        <div class="form-group">
            <label for="{{id}}" class="col-sm-2 control-label"><ng-content></ng-content></label>
            <div class="col-sm-10">
                <div class="fg-line">
                    <div class="checkbox m-b-15" *ngFor="let v of generateArray(data)">
                        <label>
                            <input type="checkbox" 
                            name = "{{id}}" 
                            [value]="v.id"
                            [checked]="value.indexOf(v.id) >= 0"
                            (click)="setCheckboxOut(v.id)"
                            [disabled]="editMode"
                            >
                            <i class="input-helper"></i>
                            {{v.display}}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class CheckBoxComponent implements OnInit{
    @Input() data       :  any;
    @Input() value      :  any;
    @Input() id         :  string;
    @Input() editMode   :  boolean;
    @Input() text       :  string;
    @Output() output = new EventEmitter<any>();

    ngOnInit() {
        this.value = this.generateArrayId(this.value);
    }

    generateArrayId(obj: any) {
        var data = this.generateArray(obj);
        var result: any = [];
        for(var i = 0; i < data.length ; i++) {
            result.push(data[i]['id'])
        }
        return result;
    }

    setCheckboxOut(obj: any) {
        var index = this.value.indexOf(obj);
        if(index > -1) {
            this.value.splice(index, 1);
        } else {
            this.value.push(obj);
        }
        this.output.emit(this.value);
    }

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }
}