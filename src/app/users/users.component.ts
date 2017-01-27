import { UsersService } from './../services/users.service';
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit } from '@angular/core';

declare var $:any;

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

	users = []
	elementRef: ElementRef;

	constructor( @Inject(ElementRef) elementRef: ElementRef, private userService: UsersService ) {
		this.elementRef = elementRef;
	}

	ngOnInit(){
		new Promise((resolve, reject) => {
			this.userService.getUsers().subscribe(
				(response) => {
					console.log( response );
					this.users = response
				},
				(error) => {},
				() => {}
			);
		});
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

}
