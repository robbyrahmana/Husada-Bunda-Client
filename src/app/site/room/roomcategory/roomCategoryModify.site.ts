import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { RoomCategory }                         from '../../../service/domain/room/room.domain';
import { RoomService }                          from '../../../service/intercept/room/room.service';

@Component({
  templateUrl: './roomCategoryModify.site.html'
})
export class RoomCategoryModifySite extends EditHelper implements Edit{
    
    dataContainer: RoomCategory = new RoomCategory();

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : RoomService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("roomcategory");
        this.route.params.subscribe(params => {
            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getRoomCategoryByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<RoomCategory>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveRoomCategoryRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateRoomCategoryRecord(this.dataContainer);
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
}