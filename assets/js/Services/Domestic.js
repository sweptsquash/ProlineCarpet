import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Domestic extends Component {
	render() {
		return(
			<div>
				<SEO title="Domestic Cleaning" url="https://www.prolinecarpet.co.uk/services/domestic-cleaning/" />
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