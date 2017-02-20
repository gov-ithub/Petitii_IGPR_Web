import { Observable } from 'rxjs/Observable';
import { CountiesService } from './../services/counties.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	userDetails;
	counties;

	constructor( private userService: UsersService, private route: ActivatedRoute, private router : Router, private countyService: CountiesService ) { }

	// ngOnInit() {

	// 	let userId = this.route.snapshot.params['id'];
	// 	this.userService.getUser( userId ).subscribe(
	// 		(response) => {
	// 			this.userDetails = response;
	// 		},
	// 		(error) => {
	// 			console.log( 'something went wrong.');
	// 		},
	// 		() => {},
	// 	)

	// }

	ngOnInit(){

		let userId = this.route.snapshot.params['id'];
		Observable.forkJoin([
			this.userService.getUser( userId ),
			this.countyService.getCounties()
		]).subscribe(data => {
			this.userDetails = data[0];
			this.counties = data[1];
		});

	}

	getCountyById( countyId ){
		return this.counties[countyId].name;
	}


	console(a){
		console.log( a );
	}

}
