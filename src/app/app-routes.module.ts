import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, FlightSearchComponent } from "./root";

const appRoutes: Routes = [
	{ path: '', component: FlightSearchComponent  },
	{ path: 'search', component: FlightSearchComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
