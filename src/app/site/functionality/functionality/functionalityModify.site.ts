import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { 
            Functionality, 
            Position, 
            SMF 
        }                                       from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

import {    
            Gender,
            Religion
        }                                       from '../../../service/domain/maintenance/maintenance.domain';
import { MaintenanceService }                   from '../../../service/intercept/maintenance/maintenance.service';

@Component({
  templateUrl: './functionalityModify.site.html'
})
export class FunctionalityModifySite extends EditHelper implements Edit{
    
    dataContainer: Functionality = new Functionality();

    //Dropdown required data
    position: any;
    positionid: any;
    SMF: any;
    SMFid: any;
    gender: any;
    genderid: any;
    religion: any;
    religionid: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : FunctionalityService, private dataService_extra : MaintenanceService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("functionality");
        this.route.params.subscribe(params => {
            
            //get dropdown data
            this.dataService.getPositionAllData().subscribe(data => {
                this.position = new Position();
                this.position = data;
                this.dataService.getSMFAllData().subscribe(data => {
                    this.SMF = new SMF();
                    this.SMF = data;
                    this.dataService_extra.getGenderAllData().subscribe(data=> {
                        this.gender = new Gender();
                        this.gender = data;
                        this.dataService_extra.getReligionAllData().subscribe(data=> {
                            this.religion = new Religion();
                            this.religion = data;
                        });
                    });
                });
            });

            if (params['id'] != null) {
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
                this.dataService.getFunctionalityByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.genderid = this.dataContainer.genderEntity.id;
                    if (this.dataContainer.religionEntity) {
                        this.religionid = this.dataContainer.religionEntity.id;
                    }
                    this.positionid = this.dataContainer.positionEntity.id;
                    this.SMFid = this.dataContainer.sMFEntity.id;
                });
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        this.error = null;
        let observable:Observable<Functionality>;
        if (this.newEntry) {
            delete this.dataContainer.id;
            observable = this.dataService.saveFunctionalityRecord(this.dataContainer);
        } else {
            observable = this.dataService.updateFunctionalityRecord(this.dataContainer);
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

    getValueGender(id: any) {
        this.genderid = id;
        return this.gender.find(x => x.id === id);
    }

    getValueReligion(id: any) {
        this.religionid = id;
        return this.religion.find(x => x.id === id);
    }

    getValuePosition(id: any) {
        this.positionid = id;
        return this.position.find(x => x.id === id);
    }

    getValueSMF(id: any) {
        this.SMFid = id;
        return this.SMF.find(x => x.id === id);
    }
}