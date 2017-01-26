import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
	constructor(private auth: AuthService, private router:Router) {}

	/**
	 * Log out the user
	 */
	logout(){
		this.auth.logout();
		this.router.navigate(['/login']);
	}
}
