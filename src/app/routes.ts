import { Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthManager} from './authmanager';

export const appRoutes: Routes = [
	{path: '', component:DashboardComponent, canActivate: [AuthManager]},
	{path: 'login', component:LoginComponent},
	{path: 'dashboard', component:DashboardComponent, canActivate: [AuthManager]},

	// otherwise redirect to home
	{ path: '**', redirectTo: '' }

];

export const AppRouterProvider = RouterModule.forRoot(appRoutes);