import { HttpService } from './http.service'
import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class CountiesService {

	_counties;

	constructor( private http: HttpService ) {}

	getCounties() : Observable<any>{
		if( ! this._counties ){
			this._counties = this.http.get('counties').publishReplay(1).refCount();
		}
		return this._counties;
	}

}

