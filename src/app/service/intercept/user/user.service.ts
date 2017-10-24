/* Default module */
import { Injectable }                                               from '@angular/core';
import { Response }                                                 from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
/* Table module */
import { PaginationPage, PaginationPropertySort }                   from '../../../components/table/pagination';
/* Domain module */
import { UserAccessibility, User, UserGroup }                       from '../../domain/user/user.domain';
import { CountDomain }                                              from '../../domain/countDomain';
/* ServiceHelper module */
import { HelperService }                                            from '../../helper/helper.service';

import { globalIntercept }                                          from '../globalIntercept';

@Injectable()
export class UserService extends globalIntercept{
    
    constructor (helperService: HelperService) {
        super(helperService);
    }
    /* serviceUrl */
    private url = "user";

    private childurl = [
                            "menu",
                            "usergroup",
                            "user"
                        ];
    
    //Menu
    getMenuByUserGroupIdAction(ID: string):Observable<UserAccessibility> {
        return this.helperService.getDataById(this.url, ID, this.childurl[0] + "/getMenuByUserGroupIdAction");
    }

    //User Group
    getUserGroupAllData():Observable<UserGroup> {
        return this.helperService.getAllData(this.url, this.childurl[1] + "/getListAction");
    }

    //User
    getUserByCD (CD: string):Observable<User> {
        return this.helperService.getDataById(this.url, CD, this.childurl[2] + "/getListByCdAction");
    }

    saveUserRecord(body: Object): Observable<User> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/saveAction");
    }

    updateUserRecord(body: Object): Observable<User> {
        return this.helperService.postAllData(this.url, body, this.childurl[2] + "/updateAction");
    }


}