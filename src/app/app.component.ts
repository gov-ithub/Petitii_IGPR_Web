import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

declare var $:any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor( router :Router ){
		// 	router.events.subscribe((val) => {
		// 		if( val instanceof NavigationEnd ){

		// 			$(window).resize();
		// 		}
		// 		// see also
		// 		console.log(val)
		// });
	}

}
