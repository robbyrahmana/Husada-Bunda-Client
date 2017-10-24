import { Injectable }                       from '@angular/core';
import { Router, ActivatedRoute }           from'@angular/router';
import { GlobalConstant }                   from '../globalConstant';

import { Observable }                       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Configurationentity }              from '../../service/domain/globalDomain';

import { Location }                         from '@angular/common';

import { ErrorRecord }                      from '../../service/domain/error/error.domain';

export class EditHelper {

    moduleName: string;
    pageName: string;
    pageDescription: string;
    pageParent: string;
    field: string[] = [];

    error: ErrorRecord;

    editMode: boolean;
    newEntry: boolean;

    text_back_to_list: string;
    text_request_to_edit: string;
    text_back_to_view_mode: string;
    text_submit: string;
    text_update: string;

    constructor(public globalConstant: GlobalConstant, public route: ActivatedRoute, public router: Router, public dataService: any) {
        this.text_back_to_list = globalConstant.text_back_to_list;
        this.text_request_to_edit = globalConstant.text_request_to_edit;
        this.text_back_to_view_mode = globalConstant.text_back_to_view_mode;
        this.text_submit = globalConstant.text_submit;
        this.text_update = globalConstant.text_update;
        
    }

    generateConfig(code: string) {
        let config: Observable<Configurationentity> = this.dataService.getPageConfigbyCode(code);
        config.subscribe(data => {
            var temp = this.generateArray(data);
            for(var i = 0; i < temp.length; i++) {
                if (temp[i].type == "modulename") {
                    this.moduleName = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pageparent") {
                    this.pageParent = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pagename") {
                    this.pageName = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pagedescription") {
                    this.pageDescription = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "field") {
                    this.field = this.globalConstant.text_format == 'en_US' ? temp[i].text1.split(",") : temp[i].text2.split(",");
                } 
            }
        });
    }

    canDeactivate(): Promise<boolean> | boolean {
        return false;
    }

    backToList(module: any) {
        this.router.navigate(['./site/' + module], { skipLocationChange: true });
    }//, { skipLocationChange: true }

    editButtonClick(editMode: boolean) {
        this.editMode = this.globalConstant.setEditMode(!editMode);
    }

    replaceByName(data: any, field: any ) {
        if (data) {
            data = JSON.stringify(data);
            var out = JSON.parse(data.split('"' + field + '":').join('"display":'));
        } else {
            var out = JSON.parse(`[{ "id": "", "display": "-- tidak ada data --" }]`);
        }
        return (out);
    }

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }

}

export interface Edit {
    submit():any;
}