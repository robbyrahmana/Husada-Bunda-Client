/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Domain module */
import { Configurationentity }                                      from '../domain/globalDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../helper/helper.service';

@Injectable()
export class globalIntercept {
    
    constructor (public helperService: HelperService) {
    }

    /* serviceUrl */
    private urldata = "configuration";

    getPageConfigbyCode (code: string):Observable<Configurationentity> {
        return this.helperService.getDataById(this.urldata, code, "page");
    }
}