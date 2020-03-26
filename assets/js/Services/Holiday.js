import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Holiday extends Component {
	render() {
		return(
			<div>
				<SEO title="Holiday Let Cleaning" url="https://www.prolinecarpet.co.uk/services/holiday-let-cleaning/" />
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Holiday Let Cleaning</h2>
							<p>If you’re renting out a property to holidaymakers, you want to make sure it’s always<br />spic and span for when they first arrive. Our team of dedicated cleaners do all they can to<br />ensure your holiday home makes the right first impression.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Holiday;