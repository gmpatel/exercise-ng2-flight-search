import {Component, OnInit} from '@angular/core';
import { FlightSearchService, FlightSearchRequest, Itinerary } from './../../core/services';
import { AirlinesPipe } from './../../core/pipes';
import * as moment from "moment";

@Component({
	selector: 'app-flight-search',
	templateUrl: './flight-search.component.html',
	styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {

	private fromAirport: string = '';
	private toAirport: string = '';
	private leavingOn: number = 0;
	private returningBackOn: number = 0;
	
	private foundItinerary: Itinerary[];
	private airlines: string[];
	
	private selectedAirline: string;
	private minAmount: number;
	private maxAmount: number;
	
	constructor(
		private flightSearchService: FlightSearchService,
		private airlinePipe: AirlinesPipe) {
	}
	
	ngOnInit() {
	}
	
	private onSubmit(): void {
		console.log('updated model...');
		console.log(this.fromAirport, this.toAirport, this.leavingOn, this.returningBackOn);
		this.searchFlights();
	}
	
	private searchFlights(): void {
		let query = <FlightSearchRequest> {
			DepartureAirportCode: this.fromAirport,
			ArrivalAirportCode: this.toAirport,
			DepartureDate: moment(this.leavingOn, 'dd/mm/yyyy').format(),
			ReturnDate: moment(this.returningBackOn, 'dd/mm/yyyy').format()
		}
		
		this.flightSearchService.getFlights(query).subscribe(
			(result: Itinerary[]) => {
				this.foundItinerary = result;
				console.log('Returned result');
				console.log(result);
				this.updateAirlines();
			}
		);
	}
	
	private updateAirlines(): void {
		this.airlines = new Array();
		this.airlines.push('All');
		this.foundItinerary.forEach(i => {
			if (this.airlines.indexOf(i.AirlineName) == -1) {
				this.airlines.push(i.AirlineName);
			}
		})
	}
}
