import React, { Component } from 'react';
import AppContact from './Components/AppContact';
import { Helmet } from 'react-helmet';

class Home extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>Contact Us</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/contact-us/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/contact-us/" />
					<meta property="og:title" content="Contact Us | Proline Carpet Cleaning" />
				</Helmet>
				<AppContact />
			</div>
		);
	}
}

export default Home;