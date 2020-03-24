import React, { Component } from 'react';
import {
	Row,
	Col,
} from 'reactstrap';

class AppFeedback extends Component {


	render() {
		return(
			<div className="app-feedback-card">
				<Row>
					<Col md={2}>
						<img src="" alt="" />
					</Col>
					<Col md={10}>
						<p className="lead"></p>
						<p></p>
						<p></p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AppFeedback;