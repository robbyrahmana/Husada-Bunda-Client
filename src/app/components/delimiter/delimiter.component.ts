//our root app component
import {Component} from '@angular/core'
@Component({
    selector: "delimiter-component",
    template: `
        <blockquote class="m-b-25 bgm-gray c-white">
            <p><ng-content></ng-content></p>
        </blockquote>
    `
})
export class DelimiterComponent {
    
}