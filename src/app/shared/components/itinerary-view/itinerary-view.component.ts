import { Component, OnInit, Input } from '@angular/core';
import { ItineraryView } from './itinerary-view.model';

@Component({
	selector: 'itinerary-view',
	templateUrl: 'itinerary-view.component.html',
	styleUrls: ['itinerary-view.component.scss']
})
export class ItineraryViewComponent implements OnInit {
	
	@Input() data: ItineraryView;
	
	constructor() {
	}
	
	ngOnInit() {
	}
}
