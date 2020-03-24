import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import ReactCompareImage from 'react-compare-image';
import AppContact from '../Components/AppContact';
import { Helmet } from 'react-helmet';

class Domestic extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>Domestic Cleaning</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/services/domestic-cleaning/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/services/domestic-cleaning/" />
					<meta property="og:title" content="Domestic Cleaning | Proline Carpet Cleaning" />
				</Helmet>
				<Container>
					<Row>
						<Col className="text-center">
							<h2>Domestic Cleaning</h2>
							<p>Proline are a reliable, experienced and locally trusted team that provide professional carpet cleaning. Leaving you with fresh, clean, hygienic carpets.</p>
							<div className="comparison">
								<ReactCompareImage leftImage="" rightImage="" />
								<div>Before</div>
								<div>After</div>
							</div>
						</Col>
					</Row>
				</Container>
				<AppContact />
			</div>
		);
	}
}

export default Domestic;