import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
	
	constructor(private http: Http,
	            private router: Router) {
	}
	
	public get(api: string): Observable<any> {
		let timerStr = 'ResponseTime for GET Request ' + api;
		console.time(timerStr);
		return Observable.create(observer => {
			this._get(api).subscribe(
				(res: any) => {
					console.timeEnd(timerStr);
					observer.next(res);
					observer.complete();
				},
				(error) => {
					console.timeEnd(timerStr);
					console.log('error on GET request');
					console.log(error);
					if (error.status == 404 || error.status == 400 || error.status == 401) {
						console.log('user is not authorised to access api...');
						this.router.navigate(['login']);
					}
					observer.error(error);
					observer.complete();
				}
			);
		});
	}
	
	public post(httpUrl: string, query: any): Observable<any> {
		let body = JSON.stringify(query);
		let timerStr = 'ResponseTime for POST Request ' + httpUrl;
		console.time(timerStr);
		return Observable.create(observer => {
			this._post(httpUrl, body).subscribe(
				(res: any) => {
					console.timeEnd(timerStr);
					observer.next(res);
					observer.complete();
				},
				(error) => {
					console.timeEnd(timerStr);
					console.log('error on POST request');
					console.log(error);
					if (error.status == 404 || error.status == 400 || error.status == 401) {
						console.log('user is not authorised to access api...');
						this.router.navigate(['login']);
					}
					observer.error(error);
					observer.complete();
				}
			);
		});
	}
	
	private getOptions(): any {
		let headersObj = {};
		
		let headers = new Headers(headersObj);
		let options = new RequestOptions({
			headers: headers
		});
		
		return options;
	}
	
	private _get(api: string): Observable<any> {
		return this.http.get(api, this.getOptions())
			.map((res: Response) => res.json())
			.catch((error: any) => {
				return Observable.create(observer => {
					observer.error(JSON.parse(JSON.stringify(error)));
				});
			});
	}
	
	private postOptions(): any {
		let headersObj = {
			'Content-Type': 'application/json',
		};
		
		let headers = new Headers(headersObj);
		let options = new RequestOptions({
			headers: headers
		});
		
		return options;
	}
	
	private _post(httpUrl: string, body: any): Observable<any> {
		let options = this.postOptions();
		return this.http.post(httpUrl, body, options)
			.map((res: Response) => res.json())
			.catch((error: any) => {
				return Observable.create(observer => {
					observer.error(JSON.parse(JSON.stringify(error)));
				});
			});
	}
}
