import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryViewComponent } from './components/';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ItineraryViewComponent
	],
	exports: [
		ItineraryViewComponent
	]
})
export class SharedModule {
}
