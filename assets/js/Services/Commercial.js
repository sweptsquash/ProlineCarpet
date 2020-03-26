import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Commercial extends Component {
	render() {
		return(
			<div>
				<SEO title="Commercial Cleaning" url="https://www.prolinecarpet.co.uk/services/commercial-cleaning/" />
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