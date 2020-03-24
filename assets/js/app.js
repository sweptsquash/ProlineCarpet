import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import Home from './Home';
import Feedback from './Feedback';
import Contact from './Contact';
import DomesticCleaning from './Services/Domestic';
import CarpetCleaning from './Services/Carpet';

import '../scss/app.scss';

ReactDOM.render(
	<Router>
		<AppHeader />
		<Switch>
			<Route exact path="/" component={ Home } />
			<Redirect exact from="/services" to="/#OurServices" />
			<Route path="/services/domestic-cleaning" component={ DomesticCleaning } />
			<Route path="/services/carpet-cleaning" component={ CarpetCleaning } />
			<Route path="/feedback" component={ Feedback } />
			<Route path="/contact-us" component={ Contact } />
		</Switch>
		<AppFooter />
	</Router>,
	document.getElementById('root'),
);