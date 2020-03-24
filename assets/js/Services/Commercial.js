import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import { Helmet } from 'react-helmet';

class Commercial extends Component {
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
							<h2>Commercial Cleaning</h2>
							<p>Our commercial cleaning services are offered to large and small businesses.<br />We know just how important a clean and tidy working environment is to the happiness and productivity of your staff.<br />Whether you need a one time cleaning, or are looking for a regular cleaning service, get in touch today to find out our availability.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Commercial;