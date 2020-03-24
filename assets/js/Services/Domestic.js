import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import { Helmet } from 'react-helmet';

class Domestic extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>Domestic Cleaning</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/services/domestic-cleaning/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/services/domestic-cleaning/" />
					<meta property="og:title" content="Domestic Cleaning | Proline Carpet Cleaning" />
				</Helmet>
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Domestic Cleaning</h2>
							<p>Our domestic cleaning service is for people on the go, whether you’re after a one-off or are looking for a regular,<br />local cleaner - Proline is the cleaning company to contact. Get in touch today to find out our availability.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Domestic;