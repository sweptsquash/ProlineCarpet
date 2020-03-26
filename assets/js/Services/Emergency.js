import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import AppContact from '../Components/AppContact';
import AppPhotos from '../Components/AppPhotos';
import SEO from '../Components/SEO';

class Emergency extends Component {
	render() {
		return(
			<div>
				<SEO title="Emergency Waterlogged Extraction" url="https://www.prolinecarpet.co.uk/services/emergency-extraction/" />
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Emergency Waterlogged Extraction</h2>
							<p>From the small unnoticeable leaks to larger damage coming from rain, burst<br />pipes or more damaging events, in all cases it’s very important that you act immediately to start the water<br />removal process. You need to ensure that it does not cause further damage<br /> and that the remediation process can begin swiftly.</p>
							<p>Depending on the severity of the water damage, various equipment and elements<br />need to be used in order to ensure complete removal and extraction of water.</p>
							<AppPhotos />
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Emergency;