import React, { Component } from 'react';
import {
	Row,
	Col,
} from 'reactstrap';
import { ServiceFeedback } from '../config';

class AppFeedback extends Component {
	render() {
		return(
			<Row>
				{ServiceFeedback.map((feedback, index) => {
					return(
						<Col sm={ 12 } xl={ 6 } key={ index }>
							<div className="app-feedback-card">
								<Row>
									<Col md={2}>
										<img src={ feedback.avatar } alt={ feedback.name } />
									</Col>
									<Col md={10}>
										<p className="lead">{ feedback.name }</p>
										<p>{ feedback.message }</p>
									</Col>
								</Row>
							</div>
						</Col>
					);
				})}
			</Row>
		);
	}
}

export default AppFeedback;