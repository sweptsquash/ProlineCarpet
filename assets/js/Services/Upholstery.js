import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Upholstery extends Component {
	render() {
		return(
			<div>
				<SEO title="Upholstery Cleaning" url="https://www.prolinecarpet.co.uk/services/upholstery-cleaning/" />
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Upholstery Cleaning</h2>
							<p>We’re trained specialists in upholstery cleaning; we aim to provide a superior service<br />adhering to excellent standards and practices. We provide two methods to clean your fabric furniture<br />in order to guarantee customer satisfaction and excellent results after work.</p>
							<p><strong>Wet Method:</strong> uses a high-speed moisture cleaning to attack not only the<br />surface but up to the deep end roots of the fibres and is appropriate for almost all types of upholstery.</p>
							<p><strong>Dry Method:</strong>a no moisture cleaning system that is ideal for more delicate fibres and materials.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Upholstery;