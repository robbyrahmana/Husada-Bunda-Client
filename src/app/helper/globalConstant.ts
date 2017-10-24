import { Injectable } from '@angular/core';
import { Configurationentity }                      from '../service/domain/globalDomain';
import { globalIntercept }                          from '../service/intercept/globalIntercept';
import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { 
    Functionality
}                                               from '../service/domain/functionality/functionality.domain';

import { 
    FunctionalityService 
}                                               from '../service/intercept/functionality/functionality.service';

@Injectable() 
export class GlobalConstant {

    public userData: Functionality = new Functionality();

    //Site setting
    public text_site_name: string;
    public text_color_setting: string;
    public text_footer: string;

    //Page setting
    public text_back_to_list: string;
    public text_request_to_edit: string;
    public text_back_to_view_mode: string;
    public text_submit: string;
    public text_update: string;
    public text_no_record_found: string;
    public style_table: string;
    public text_format: string; //ind or en_US
    public EditMode: boolean = false;

    constructor(dataService : globalIntercept, dataService_user: FunctionalityService) {
        let config: Observable<Configurationentity> = dataService.getPageConfigbyCode("global");
        config.subscribe(data => {
            var temp = this.generateArray(data);
            for(var i = 0; i < temp.length; i++) {
                if (temp[i].type == "textformat") {
                    this.text_format = temp[i].text1;
                }
            }
            console.log(this.text_format);
            for(var i = 0; i < temp.length; i++) {
                if (temp[i].type == "sitename") {
                    this.text_site_name = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "styletable") {
                    this.style_table = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textbacktolist") {
                    this.text_back_to_list = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textbacktoviewmode") {
                    this.text_back_to_view_mode = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textcolor") {
                    this.text_color_setting = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textfooter") {
                    this.text_footer = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textnorecordfound") {
                    this.text_no_record_found = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textrequesttoedit") {
                    this.text_request_to_edit = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textsubmit") {
                    this.text_submit = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "textupdate") {
                    this.text_update = this.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                }
            }
        });

        dataService_user.getFunctionalityByID(sessionStorage.getItem("user_id")).subscribe(data => {
            this.userData = data;
        });
    }

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }

    public setEditMode(val: boolean) {
        this.EditMode = val;
        return this.EditMode;
    }

}