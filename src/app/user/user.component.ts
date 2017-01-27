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

	constructor( private userService: UsersService, private route: ActivatedRoute, private router : Router ) { }

	ngOnInit() {

		let userId = this.route.snapshot.params['id'];
		this.userService.getUser( userId ).subscribe(
			(response) => {
				console.log( response );
				this.userDetails = response;
			},
			(error) => {
				console.log( 'something went wrong.');
			},
			() => {},
		)

	}

}
