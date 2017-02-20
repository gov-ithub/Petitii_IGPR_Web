import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { AuthService } from './auth.service';

@Injectable()
export class HttpService {

	apiUrl = 'https://tickets.kyospirit.ro:443/';

	constructor( private http: Http, private auth: AuthService, private router:Router ) {}

	get( url: string, options?:RequestOptionsArgs ){

		let token = this.auth.getUserToken();

		if (!options) {
			// let's make option object
			options = {headers: new Headers()};
		}
		options.headers.set('Authorization', `Bearer ${token}`);
		console.log( 'performing request', this.apiUrl + url );
		return this.http.get( this.apiUrl + url, options ).map((response) => {
			console.log( 'response for last request request', response.json() );
			return response.json();
		}).catch(this.handleError( this ));
	}

	handleError( self: HttpService ){
		return (res: Response) => {
			console.log(res);
			if ( res.status === 401 || res.status === 403 ) {
				// Logout the user
				this.auth.logout();
				// The auth Token is expired. We need to redirect the user to the login page
				this.router.navigate(['/login']);
			}
			return Observable.throw(res);
		};
	}

}
