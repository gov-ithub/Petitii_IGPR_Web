import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

@Injectable()
export class CountiesService {

  // Holds the counties received from the API
  counties;
  baseUrl = 'https://tickets.kyospirit.ro:443/counties';

  constructor( private http: Http ) { }
  getCounties(){
    return new Promise((resolve) => {
        this.http.get( this.baseUrl ).subscribe((data) => {
            if(data.json().success) {
                this.counties = data.json().counties;
            }
            resolve(this.counties);
        })
    })
  }
}
