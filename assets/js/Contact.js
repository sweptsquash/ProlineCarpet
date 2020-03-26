import React, { Component } from 'react';
import AppContact from './Components/AppContact';
import SEO from './Components/SEO';

class Home extends Component {
	render() {
		return(
			<div>
				<SEO title="Contact Us" url="https://www.prolinecarpet.co.uk/contact-us/" />
				<AppContact />
			</div>
		);
	}
}

export default Home;