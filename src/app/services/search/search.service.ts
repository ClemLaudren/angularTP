import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchService {

    constructor(private _http: HttpClient) { }

    baseUrl: string = 'http://localhost:8080/rest/articles/';

    search(queryString: string) {
        let _URL = this.baseUrl + queryString;
        return this._http.get(_URL);
    }

}
