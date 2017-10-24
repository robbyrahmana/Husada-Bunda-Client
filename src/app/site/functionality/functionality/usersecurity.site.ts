import { Component, Input, OnChanges, SimpleChange }  from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { User, UserGroup }                      from '../../../service/domain/user/user.domain';
import { UserService }                          from '../../../service/intercept/user/user.service';

@Component({
    selector: "user-security",
    templateUrl: './usersecurity.site.html'
})
export class UserSecurityModifySite extends EditHelper implements Edit{
    
    @Input() data: String = "";

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.newEntry = false;
        if(this.data) {
            this.dataService.getUserByCD(this.data).subscribe(data => {
                this.dataContainer = data;
                if(this.dataContainer.userGroupEntity) this.usergroupid = this.dataContainer.userGroupEntity.id;
            });
        }
    }

    dataContainer: User = new User();
    usergroup: any;
    usergroupid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : UserService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("usersecurity");
        this.route.params.subscribe(params => {
            
            this.dataService.getUserGroupAllData().subscribe(data => {
                this.usergroup = new UserGroup();
                this.usergroup = data;
            });
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<User>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveUserRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateUserRecord(this.dataContainer);
        }

        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                } else {
                    alert("Berhasil update");
                }
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getValueUserGroup(id: any) {
        this.usergroupid = id;
        return this.usergroup.find(x => x.id === id);
    }
}