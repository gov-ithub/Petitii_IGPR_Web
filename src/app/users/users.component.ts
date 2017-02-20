import { Observable } from 'rxjs/Rx';
import { CountiesService } from './../services/counties.service';
import { UsersService } from './../services/users.service';
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, OnInit } from '@angular/core';

declare var $:any;

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {

	users = [];
	counties = [];
	elementRef: ElementRef;

	constructor( @Inject(ElementRef) elementRef: ElementRef, private userService: UsersService, private countyService: CountiesService ) {
		this.elementRef = elementRef;
	}

	ngOnInit(){

		Observable.forkJoin([
			this.userService.getUsers(),
			this.countyService.getCounties()
		]).subscribe(data => {
			this.users = data[0];
			this.counties = data[1];
		});

	}

	getCountyById( countyId ){
		return this.counties[countyId].name;
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
