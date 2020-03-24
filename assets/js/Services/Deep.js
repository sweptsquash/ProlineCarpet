import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import { Helmet } from 'react-helmet';

class Deep extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>One Off Deep Clean</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/services/deep-clean/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/services/deep-clean/" />
					<meta property="og:title" content="One Off Deep Clean | Proline Carpet Cleaning" />
				</Helmet>
				<Container>
					<Row>
						<Col className="text-center">
							<h2>One Off Deep Clean</h2>
							<p>Our deep cleaning services provide you with a sure-fire way to completely eliminate<br />all dust, dirt, debris and bacteria from your premises, all the while ensuring that your property is<br />thoroughly disinfected and entirely germ-free.</p>
							<p>No building is too big or too small for our teams. Schools, gyms, offices, factories,<br />restaurants, bars, cinemas, supermarkets and hotels, we can do it all!</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Deep;