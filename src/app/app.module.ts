import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Md2Module }  from 'md2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routes.module';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { HomeComponent, FlightSearchComponent } from './root'
import 'hammerjs';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		MaterialModule,
		Md2Module,
		CoreModule,
		SharedModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		FlightSearchComponent
	],
	providers: [
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
