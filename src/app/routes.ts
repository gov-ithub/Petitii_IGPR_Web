import { UsereditComponent } from './useredit/useredit.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
	{path: '', component:DashboardComponent, canActivate: [AuthGuard]},
	{path: 'login', component:LoginComponent},
	{path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
	{path: 'users', component:UsersComponent, canActivate: [AuthGuard]},
	{ path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
	{ path: 'user/:id/edit', component: UsereditComponent, canActivate: [AuthGuard] },

	// otherwise redirect to home
	{ path: '**', redirectTo: '' }

];

export const AppRouterProvider = RouterModule.forRoot(appRoutes);