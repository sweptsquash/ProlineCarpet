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
					<title>Car Seat Valeting</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/services/car-seat-valeting/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/services/car-seat-valeting/" />
					<meta property="og:title" content="Car Seat Valeting | Proline Carpet Cleaning" />
				</Helmet>
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