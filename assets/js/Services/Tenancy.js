import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Tenancy extends Component {
	render() {
		return(
			<div>
				<SEO title="End Of Tenancy Cleaning" url="https://www.prolinecarpet.co.uk/services/end-of-tenancy-cleaning/" />
				<Container>
					<Row>
						<Col className="text-center">
							<h2>End Of Tenancy Cleaning</h2>
							<p>Whether you’re a landlord or a tenant, when a tenancy comes to an end you want<br />to be sure the property will pass it’s final inspection with flying colours when you hand over the keys.<br />We offer an efficient, professional and friendly service for both commercial and residential properties.</p>
							<p className="lead">For Tenants</p>
							<p>As a tenant, your deposit is at risk if you leave the property in a poor state, so hiring a<br />professional cleaning service with a high standard gives you peace of mind.<br />You’ll know there won’t be any nasty surprises when you give the property back to your landlord.</p>
							<p className="lead">For Landlords</p>
							<p>As a landlord, we know your property is also your livelihood and so our aim is to make<br />sure you can put your property back on the market as fast as possible once your<br />existing tenants have moved out. This way, you save both time and money, while remaining stress-free.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Tenancy;