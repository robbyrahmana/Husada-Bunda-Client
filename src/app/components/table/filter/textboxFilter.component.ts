//our root app component
import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: "textbox-filter-component",
    template: `
        <div class="col-sm-3">
            <div class="form-group fg-float">
                <div class="fg-line">
                    <input type="text" name="{{id}}" [(ngModel)]="data" (blur)="sendData(data)" class="form-control input-sm fg-input" id="{{id}}">
                    <label class="fg-label" for="{{id}}"><ng-content></ng-content></label>
                </div>
            </div>
        </div>
    `
})
export class TextBoxFilterComponent {
    @Input() id         :  string;
    @Input() data       :any;
    @Output() output = new EventEmitter<any>();

    sendData(data: any) {
        this.output.emit(data);
    }
}