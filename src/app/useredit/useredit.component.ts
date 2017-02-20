import { CountiesService } from './../services/counties.service';
import { UsersService } from './../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-useredit',
	templateUrl: './useredit.component.html',
	styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {

	userDetails

	constructor(private route: ActivatedRoute, private userService: UsersService, private countyService: CountiesService) { }

	ngOnInit() {
		let userId = this.route.snapshot.params['id'];
		this.userService.getUser( userId ).subscribe(
			(response) => {
				this.userDetails = response;
			},
			(error) => {
				console.log( 'something went wrong.');
			},
			() => {},
		)
	}


}
