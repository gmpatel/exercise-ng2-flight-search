import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightSearchService {
	constructor(private webApiService: WebApiService) {
	}
	
	public getFlights(query: FlightSearchRequest): Observable<Itinerary[]> {
		return this.webApiService.get('flight', query);
	}
}

export interface FlightSearchRequest {
	DepartureAirportCode: string;
	ArrivalAirportCode: string;
	DepartureDate: any;
	ReturnDate: any;
}

export interface Itinerary {
	AirlineLogoAddress: string;
	AirlineName: string;
	InboundFlightsDuration: any;
	ItineraryId: number;
	OutboundFlightsDuration: any;
	Stops: number;
	TotalAmount: number;
}
