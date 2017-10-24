//our root app component
import {Component, ElementRef, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: "notification-component",
    template: `
        <div class="alert alert-{{type}}" role="alert" *ngIf="value">
            <div class="media">
                <div class="pull-left">
                    <i style="font-size: 2em" class="zmdi zmdi-block"></i>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{value}}</h4>
                    <div><small>Please contact your administrator if you not aware of this error</small></div>
                </div>
            </div>
        </div>
    `
})
export class NotificationComponent {

    @Input() value      : any;
    @Input() type       : any;

}