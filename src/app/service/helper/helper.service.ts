import { Injectable }                                               from "@angular/core";
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable }                                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import                                                              'rxjs/add/operator/publish';

/* Table module */
import { PaginationPropertySort }                                   from '../../components/table/pagination';

import { GlobalConstant }                                           from '../../helper/globalConstant';

@Injectable() 
export class HelperService {

    //public serviceUrl: string = "http://hishusada1.com/REM-V.1.0.0/";
    public serviceUrl: string = "http://localhost:8080/REM/";
    
    constructor (private http: Http) {
    }

    private extractData(res: Response) {
        let body = res.json();    
        return body || { };
    }

    public getDataTable(url: string, page: number, pageSize: number, sort: PaginationPropertySort, temp:string = "getDataTable", filter1:string = null, filter2:string=null, filter3:string = null, filter4:string = null, filter5:string = null) {
        let params = new URLSearchParams();
        if (filter1 != null) params.set('filter1', `${filter1}`);
        if (filter2 != null) params.set('filter2', `${filter2}`);
        if (filter3 != null) params.set('filter3', `${filter3}`);
        if (filter4 != null) params.set('filter4', `${filter4}`);
        if (filter5 != null) params.set('filter5', `${filter5}`);
        params.set('size', `${pageSize}`);
        params.set('page', `${page}`);

        if (sort != null) {
            params.set('sort', `${sort.property},${sort.direction}`);
        }

        let options = new RequestOptions({
            search: params
        });
        
        return this.http.get(`${this.serviceUrl}${url}/${temp}`, options)
                .map(this.extractData);
    }

    public getAllData(url: string, temp: string = "getAll") {
        return this.http.get(`${this.serviceUrl}${url}/${temp}`).map(this.extractData).publish().refCount();
    }

    public getDataById (url: string, id: string, temp: string = "get") {
        return this.http.get(`${this.serviceUrl}${url}/${temp}/${id}`).map(this.extractData).publish().refCount();
    }

    public postAllData(url: string, body: Object, temp: string = "getAll") {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options    = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(`${this.serviceUrl}${url}/${temp}`, bodyString, options) // ...using post request
                        .map(this.extractData) // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error.json())); //...errors if any
    }

    public deleteData (url: string, id: string) {
        return this.http.delete(`${this.serviceUrl}${url}/delete/${id}`);
    }
}