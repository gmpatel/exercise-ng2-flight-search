import {AppComponent} from './app.component';

describe('AppComponent', () => {
	it('should create the app', () => {
		let app = new AppComponent();
		expect(app).toBeTruthy();
	})
	
	it(`should have as title 'Welcome to SkySearch'`, () => {
		const app = new AppComponent();
		expect(app.title).toEqual('Welcome to SkySearch');
	});
});
