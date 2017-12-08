import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppConfigService, HttpService, WebApiService, FlightSearchService } from './services';
import { AirlinesPipe } from './pipes';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		AirlinesPipe
	],
	providers: [
		HttpService,
		AppConfigService,
		WebApiService,
		FlightSearchService,
		AirlinesPipe
	],
	exports: [
		AirlinesPipe
	]
})
export class CoreModule {
}
