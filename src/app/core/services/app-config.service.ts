import {Injectable} from '@angular/core';

@Injectable()
export class AppConfigService {
	
	private config: any = {
		'webapi': {
			'host': 'http://nmflightapi.azurewebsites.net',
			'root': 'api',
		},
		'version': '2016.11.10'
	};
	
	constructor() {
	}
	
	private _getConfigCopy(): any {
		return (JSON.parse(JSON.stringify(this.config)));
	}
	
	key(path: string): any {
		let subStrings = path.split('.');
		let config = this._getConfigCopy();
		for (let str of subStrings) {
			config = config[str];
		}
		return config;
	}
	
	getAppVersion(): string {
		return this.config['version'];
	}
}
