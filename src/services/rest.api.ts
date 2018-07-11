import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {
    headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http:HttpClient){

    }

    get(url):Observable<any>{
        return this.http.get(url);        
    }


    extractData(res: Response,l:number) {
        let body = res.json();
        return body;
    }

    handleError(error:any){
        return Observable.throw(error);
    }
}