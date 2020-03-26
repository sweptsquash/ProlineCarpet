import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Deep extends Component {
	render() {
		return(
			<div>
				<SEO title="One Off Deep Clean" url="https://www.prolinecarpet.co.uk/services/deep-clean/" />
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