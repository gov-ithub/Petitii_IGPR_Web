import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';

declare var $:any;

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
	public loginForm = this.fb.group({
		email: ["", Validators.required],
		password: ["", Validators.required],
		rememberme: [""]
	});
	elementRef: ElementRef;
	message;
	alertType; // Can be danger or success
	loading = false;

	constructor(public fb: FormBuilder, private router:Router, private auth: AuthService, @Inject(ElementRef) elementRef: ElementRef) {
		this.elementRef = elementRef;
	}

	ngAfterViewInit() {
		$(this.elementRef.nativeElement).find('input').iCheck({
			checkboxClass: 'icheckbox_square-blue',
			radioClass: 'iradio_square-blue',
			increaseArea: '20%' // optional
		});
	}

	ngOnDestroy(){
		$(this.elementRef.nativeElement).find('input').iCheck('destroy');
	}

	ngOnInit() {
	}

	login(event: Event) {
		event.preventDefault();
		let formData = this.loginForm.value;

		// Reset message
		this.message = false;

		// Don't proceed if we don't have an email and password
		if( formData.email == ''  || formData.password == '' ){
			return;
		}

		this.loading = true;

		this.auth.login(formData)
		.subscribe(
			data => {
				this.loading = false;
				this.router.navigate(['/dashboard']);
			},
			error => {
				let errorJson = error.json();
				if( errorJson.message ){
					// Set data for the alert
					this.alertType = 'danger';
					this.message = errorJson.message;
					this.loading = false;
				}
			}
		);
	}

}