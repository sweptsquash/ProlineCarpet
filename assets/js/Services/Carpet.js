import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import { Helmet } from 'react-helmet';

class Carpet extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>Carpet Cleaning</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/services/carpet-cleaning/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/services/carpet-cleaning/" />
					<meta property="og:title" content="Carpet Cleaning | Proline Carpet Cleaning" />
				</Helmet>
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Carpet Cleaning</h2>
							<p>Our professional carpet cleaning services are carried out by expert carpet technicians<br />who are trained specialists in the craft of carpet care and offer a superb level of service at a price<br />you can really afford. We do our best to always leave you with fresh, clean, hygienic carpets.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Carpet;