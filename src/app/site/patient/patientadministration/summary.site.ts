import { Component }                            from '@angular/core';
import { EditHelper, Edit }                     from '../../../helper/edit/edit.helper';
import { Router, ActivatedRoute }               from'@angular/router';
import { Observable }                           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { GlobalConstant }                       from '../../../helper/globalConstant';

import { PatientAdministration }                         from '../../../service/domain/patient/patient.domain';
import { PatientService }                           from '../../../service/intercept/patient/patient.service';

import { Functionality }               from '../../../service/domain/functionality/functionality.domain';
import { FunctionalityService }                 from '../../../service/intercept/functionality/functionality.service';

@Component({
  templateUrl: './summary.site.html'
})
export class SummarySite extends EditHelper implements Edit{
    
    dataContainer: PatientAdministration = new PatientAdministration();
    render: any = false;
    patientAdministrationId: any;

    constructor(globalConstant: GlobalConstant, route: ActivatedRoute, router: Router, dataService : PatientService) {
        super(globalConstant, route, router, dataService);
        this.generateConfig("summary");
        this.route.params.subscribe(params => {

            if (params['id'] != null) {
                this.dataService.getPatientAdministrationByID(params['id']).subscribe(data => {
                    this.dataContainer = data;
                    this.patientAdministrationId = params['id'];
                    this.render = true;
                });
                this.editMode = this.globalConstant.setEditMode(true);
                this.newEntry = false;
            } else {
                this.editMode = this.globalConstant.setEditMode(false);
                this.newEntry = true;
            }
        });
    }

    submit() {
        
    }

    checkNew(id: any) {
        let observable:Observable<PatientAdministration>;
        observable = this.dataService.updatePatientAdministrationStatusById(id);
        observable.subscribe(
            data => {
                alert("Status update");
                this.router.navigate(['./site/administration'], { skipLocationChange: true });
            }
        );
    }
}