import {Pipe, PipeTransform} from '@angular/core';
import { Itinerary } from './../services';
@Pipe({
	name: 'airlines'
})
export class AirlinesPipe implements PipeTransform {
	transform(value: Itinerary[], airlineName: string, minAmount: number, maxAmount: number): any {
		let retVal = value.slice();;
		
		if (airlineName) {
			if (airlineName != 'All') {
				retVal = retVal.filter(i => i.AirlineName.toLowerCase() == airlineName.toLowerCase());
			}
		}
		if (minAmount) {
			retVal = retVal.filter(i => i.TotalAmount >= minAmount);
		}
		if (maxAmount) {
			retVal = retVal.filter(i => i.TotalAmount <= maxAmount);
		}
		
		console.log('returned result');
		console.log(retVal);
		
		if (retVal.length == 0) {
			let noItinerary = <Itinerary> {
				AirlineName: null
			};
			retVal.push(noItinerary);
		}
		
		return retVal;
	}
}
