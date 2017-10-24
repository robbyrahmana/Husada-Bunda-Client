import { Component } from '@angular/core';
import { Router }                                   from '@angular/router';

import { GlobalConstant }                           from '../../helper/globalConstant';
import { PaginationPage, PaginationPropertySort }   from '../../components/table/pagination';
import { Table }                                    from '../../components/table/table';

import { StatusService }                            from '../../service/intercept/status/status.service';
import { Status }                             from '../../service/domain/status/status.domain';

@Component({
  templateUrl: './listsample.site.html',
  providers: [ StatusService ]
})
export class ListSampleSite {

    // Variable
    tableHeader: any = ["#", "First Name", "Last Name", "Email", "Nick Name"];
    private Status = new Status("", "", "");

    //Method
    constructor(private router: Router, private statusService: StatusService) {
    }

    ngOnInit() {
      this.statusService.getAllData().subscribe(data => {
        this.Status = data;
      });
    }

    get diagnostic() { return JSON.stringify(this.Status); }
}