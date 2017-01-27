import { Observable } from 'rxjs/Observable'
import { Injectable } from '@angular/core';

import { HttpService } from './../services/http.service';

@Injectable()
export class UsersService {

	constructor( private http: HttpService ) { }

	getUsers(){
		return this.http.get('users');
	}

	getUser( userId: number ){
		return this.http.get('users/' + userId);
	}

}
