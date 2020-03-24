import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import Home from './Home';
import Contact from './Contact';
import DomesticCleaning from './Services/Domestic';
import CommercialCleaning from './Services/Commercial';
import Tenancy from './Services/Tenancy';
import Holiday from './Services/Holiday';
import CarSeat from './Services/CarSeat';
import Upholstery from './Services/Upholstery';
import Emergency from './Services/Emergency';
import CarpetCleaning from './Services/Carpet';
import Deep from './Services/Deep';

import '../scss/app.scss';

ReactDOM.render(
	<Router>
		<AppHeader />
		<Switch>
			<Route exact path="/" component={ Home } />
			<Redirect exact from="/services" to="/#OurServices" />
			<Route path="/services/domestic-cleaning" component={ DomesticCleaning } />
			<Route path="/services/commercial-cleaning" component={ CommercialCleaning } />
			<Route path="/services/end-of-tenancy-cleaning" component={ Tenancy } />
			<Route path="/services/holiday-let-cleaning" component={ Holiday } />
			<Route path="/services/car-seat-valeting" component={ CarSeat } />
			<Route path="/services/upholstery-cleaning" component={ Upholstery } />
			<Route path="/services/emergency-extraction" component={ Emergency } />
			<Route path="/services/carpet-cleaning" component={ CarpetCleaning } />
			<Route path="/services/deep-clean" component={ Deep } />
			<Route path="/contact-us" component={ Contact } />
		</Switch>
		<AppFooter />
	</Router>,
	document.getElementById('root'),
);