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
				<SEO title="Car Seat Valeting" url="https://www.prolinecarpet.co.uk/services/car-seat-valeting/" />
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Car Seat Valeting</h2>
							<p>Our car seat valeting service aims to rejuvenate pile and colour in your car seats, while<br />removing general dirt build up. We make sure to get into all of the nooks and crannies that can make car seat cleaning a headache. </p>
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