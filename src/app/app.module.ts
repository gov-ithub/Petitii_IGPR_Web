import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer.component'
import { SidebarComponent } from './components/sidebar.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './components/header/header.component';

// Routes
import { AppRouterProvider } from './routes';

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { UsersService } from './services/users.service';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';
import { UsereditComponent } from './useredit/useredit.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		FooterComponent,
		SidebarComponent,
		UsersComponent,
		HeaderComponent,
		UserComponent,
		UsereditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule ,
		HttpModule,
		RouterModule,
		AppRouterProvider
	],
	providers: [
		AuthService,
		AuthGuard,
		HttpService,
		UsersService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
