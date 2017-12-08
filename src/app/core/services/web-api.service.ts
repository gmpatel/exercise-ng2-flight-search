import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Remote Services
import { AppConfigService } from './app-config.service';
import { HttpService } from './http.service';

@Injectable()
export class WebApiService {
	
	private webApiBaseUrl: string;
	
	constructor(private appConfigService: AppConfigService,
	            private httpService: HttpService) {
	}
	
	private _setWebApiUrl(): void {
		let webApiConfig = this.appConfigService.key('webapi');
		this.webApiBaseUrl = webApiConfig.host + '/' + webApiConfig.root + '/';
	}
	
	private webApi(api): string {
		if (this.webApiBaseUrl == undefined) {
			this._setWebApiUrl();
		}
		let fullUrl = this.webApiBaseUrl + api;
		console.log('calling web api ' + fullUrl);
		return fullUrl;
	}
	
	get(api: string, query?: any): Observable<any> {
		let queryString = '';
		if (query) {
			queryString += this.jsonToQueryString(query);
		}
		api += queryString;
		return this.httpService.get(this.webApi(api));
	}
	
	post(api: string, query: any): Observable<any> {
		return this.httpService.post(this.webApi(api), query);
	}
	
	private jsonToQueryString(json) {
		return '?' +
			Object.keys(json).map(function(key) {
				return encodeURIComponent(key) + '=' +
					encodeURIComponent(json[key]);
			}).join('&');
	}
}
