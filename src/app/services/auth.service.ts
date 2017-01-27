import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http'


import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
	private baseUrl: string = 'https://tickets.kyospirit.ro:443/auth/';

	isAuthenticated: boolean = false;
	userData: {};
	userToken: string;

	constructor( private http: Http ) {}

	/**
	 * Will perform the login
	 */
	login(usercreds){

		let params = new URLSearchParams();
		params.set('email', usercreds.email);
		params.set('password', usercreds.password);

		let options = new RequestOptions({
			search: params
		});

		return this.http.get( this.baseUrl + 'users', options).map(( response: Response ) => {

			// login successful if there's a jwt token in the response
			let user = response.json();
			console.log( 'user', user );
			if (user && user.type == 'bearer') {

				let userToken = user.value;

				this.userData = user;
				this.isAuthenticated = true;

				// store user details
				localStorage.setItem('currentUser', JSON.stringify(user));
				localStorage.setItem('userToken', userToken);
				console.log( 'auth extract data', this );
			}

			return user;

		})
	}

	getUserToken(){
		console.log( 'userToken', localStorage.getItem('userToken') );
		return localStorage.getItem('userToken');
	}

	/**
	 * Will perform logout
	 */
	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
	}

}