import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';

import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthManager implements CanActivate {
	constructor(private router: Router, private auth: AuthService) {
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

		if (localStorage.getItem('currentUser')) {
			// logged in so return true
			return true;
		}

		// not logged in so redirect to login page with the return url
		this.router.navigate(['/login']);
		// this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
		return false;
	}
}