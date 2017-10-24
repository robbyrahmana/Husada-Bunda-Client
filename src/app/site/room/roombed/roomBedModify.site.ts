import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { RoomDetail, RoomCategory, RoomBed }    from '../../../service/domain/room/room.domain';
import { RoomService }                          from '../../../service/intercept/room/room.service';

@Component({
  templateUrl: './roomBedModify.site.html'
})
export class RoomBedModifySite extends EditHelper implements Edit{
    
    dataContainer: RoomBed = new RoomBed();
    roomcategory: any;
    roomCategoryid: any;
    roomDetail: any;
    roomDetailid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : RoomService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("roombed");
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
                this.dataService.getRoomBedByID(params['id']).subscribe(data => {  
                    this.dataContainer = data;
                    this.roomCategoryid = this.dataContainer.roomDetailEntity.roomCategoryEntity.id;
                    //Get Room Detail first load
                    let observable: Observable<RoomDetail> = this.dataService.getRoomDetailByCategoryId(this.roomCategoryid);
                    observable.subscribe(data1 => {
                        this.roomDetail = new RoomDetail();
                        this.roomDetail = data1;

                        this.roomCategoryid = this.dataContainer.roomDetailEntity.roomCategoryEntity.id;
                        this.roomDetailid = this.dataContainer.roomDetailEntity.id;
                    });
                    
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        if (this.roomDetailid != null) {
            this.error = null;
            let observable:Observable<RoomBed>;
            if (this.newEntry) {
                delete this.dataContainer.id;
                observable = this.dataService.saveRoomBedRecord(this.dataContainer);
            } else {
                observable = this.dataService.updateRoomBedRecord(this.dataContainer);
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
        } else {
            this.error = JSON.parse('{ "fieldErrors": [ { "field": "roomDetailEntity", "message": "Field cannot be empty" } ] }');
        }
    }

    getValueDetail(id: any) {
        this.roomDetail = null;
        this.roomDetailid = null;
        //get room detail by category
        let observable: Observable<RoomDetail> = this.dataService.getRoomDetailByCategoryId(id);
        observable.subscribe(data => {
            this.roomDetail = new RoomDetail();
            this.roomDetail = data;
        });

        this.roomCategoryid = id;
        return this.roomcategory.find(x => x.id === id);
    }

    getValue(id: any) {
        this.roomDetailid = id;
        return this.roomDetail.find(x => x.id === id);
    }
}