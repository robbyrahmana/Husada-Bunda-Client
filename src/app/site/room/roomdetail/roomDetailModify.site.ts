import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { RoomDetail, RoomCategory }             from '../../../service/domain/room/room.domain';
import { RoomService }                          from '../../../service/intercept/room/room.service';

@Component({
  templateUrl: './roomDetailModify.site.html'
})
export class RoomDetailModifySite extends EditHelper implements Edit{
    
    dataContainer: RoomDetail = new RoomDetail();
    roomcategory: any;
    roomCategoryid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : RoomService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("roomdetail");
        this.route.params.subscribe(params => {
            //get room category
            let observable: Observable<RoomCategory> = this.dataService.getRoomCategoryAllData();
            observable.subscribe(data => {
                this.roomcategory = new RoomCategory();
                this.roomcategory = data;
            });
            
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getRoomDetailByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.roomCategoryid = this.dataContainer.roomCategoryEntity.id;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<RoomDetail>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveRoomDetailRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateRoomDetailRecord(this.dataContainer);
        }

        observable.subscribe(
            data => {
                if (this.newEntry) {
                    alert("Berhasil insert");
                    this.backToList(this.moduleName);
                } else {
                    alert("Berhasil update");
                    this.backToList(this.moduleName);
                }
            }, 
            err => {
                // Log errors if any
                this.error = err;
            }
        );
    }

    getValue(id: any) {
        this.roomCategoryid = id;
        return this.roomcategory.find(x => x.id === id);
    }
}