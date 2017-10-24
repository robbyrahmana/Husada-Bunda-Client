import { Component }            from '@angular/core';
import { EditHelper, Edit }     from '../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { GlobalConstant }       from '../../helper/globalConstant';

@Component({
  templateUrl: './editpage.site.html'
})
export class EditPageSite extends EditHelper implements Edit{

    moduleName: string = "site";
    pageName: string = "Sample Edit";
    pageDescription = "Data master for room category in your hospital";
    
    date: Date = new Date(2017, 5 -1, 15);
    text: string = "sample text";
    dropvalue: string = "5002";
    radio: string = "5002";
    checkbox: any =   `[{ "id": "5002", "type": "Glazed" },{ "id": "5005", "type": "Sugar" }]`;
    
    json: any =   `[{ "id": "5001", "type": "None" },{ "id": "5002", "type": "Glazed" },{ "id": "5005", "type": "Sugar" }]`;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute , router: Router) {
        super(globalConstant, route, router, null);
        this.checkbox = JSON.parse(this.checkbox);
    } 

    submit() {}
}