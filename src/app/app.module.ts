import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouterProvider } from './routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthManager } from './authmanager';

import { FooterComponent } from './components/footer.component'
import { SidebarComponent } from './components/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent
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
    AuthManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
