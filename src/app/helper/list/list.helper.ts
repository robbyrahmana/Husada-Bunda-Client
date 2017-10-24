import { Router }               from'@angular/router';
import { GlobalConstant }       from '../globalConstant';

import { Observable }                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { PaginationPage, PaginationPropertySort }   from '../../components/table/pagination';
import { Configurationentity }                      from '../../service/domain/globalDomain';

export class ListHelper {

    moduleName: string;
    pageParent: string;
    pageName: string;
    pageDescription: string;
    tableHeader: string[] = [];
    filterText: string[] = [];

    no_record_found: string;
    tableStyle: string;

    constructor(public globalConstant: GlobalConstant, public router: Router, public dataService: any) {
        this.no_record_found = globalConstant.text_no_record_found;
        this.tableStyle = globalConstant.style_table;
    }  

    add(module: string) {
        this.router.navigate(["./site/" + module + '/modify'], { skipLocationChange: true });
    }

    detail(module: string, data: string) {
        this.router.navigate(["./site/" + module + '/modify', data], { skipLocationChange: true });
    }

    generateConfig(code: string) {
        let config: Observable<Configurationentity> = this.dataService.getPageConfigbyCode(code);
        config.subscribe(data => {
            var temp = this.generateArray(data);
            for(var i = 0; i < temp.length; i++) {
                if (temp[i].type == "modulename") {
                    this.moduleName = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pageparent") {
                    this.pageParent = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pagename") {
                    this.pageName = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "pagedescription") {
                    this.pageDescription = this.globalConstant.text_format == 'en_US' ? temp[i].text1 : temp[i].text2;
                } else if (temp[i].type == "tableheader") {
                    this.tableHeader = this.globalConstant.text_format == 'en_US' ? temp[i].text1.split(",") : temp[i].text2.split(",");
                } else if (temp[i].type == "filter") {
                    this.filterText = this.globalConstant.text_format == 'en_US' ? temp[i].text1.split(",") : temp[i].text2.split(",");
                } 
            }
        });
    }

    generateArray(obj: any){ return Object.keys(obj).map((key)=>{
        return obj[key]
    }); }
    
}

export interface List {
    
    dataPage: PaginationPage<any>;
    self: any;
    paginationData: any;

    filterData() : any;
    fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort, filter1: string, filter2: string, filter3: string, filter4: string, filter5: string): Observable<PaginationPage<any>>;
}