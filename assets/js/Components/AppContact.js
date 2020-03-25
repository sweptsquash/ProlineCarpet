import React, { Component } from 'react';
import {
    Alert,
	Container,
	Row,
	Col,
	Form,
	FormGroup,
	Button,
	Label,
	Input,
} from 'reactstrap';
import { servicesOffered } from '../config';

class AppContact extends Component {
	constructor(props) {
        super(props);
        
        this.submitForm.bind(this);

		this.state = {
			values: {
				name: '',
				service: 'Domestic Cleaning',
				postcode: '',
				method: 'phone',
				phone: '',
				email: '',
				message: '',
            },
            validation: {
                name: false,
                postcode: false,
                phone: false,
                email: false,
                message: false,
            },
			isSubmitted: false,
			isSubmitting: false,
			isError: false,
		};
	}

	submitForm = async e => {
		e.preventDefault();

		this.setState({ isSubmitting: true });

		const res = await fetch('https://www.prolinecarpet.co.uk/contact-form', {
			method: 'POST',
			body: JSON.stringify(this.state.values),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		this.setState({ isSubmitting: false });

        const data = await res.json();

        if(!data.hasOwnProperty('error')) {
            this.setState({ isSubmitted: true });
        }
        else {
            this.setState({ isError: true });

            Object.keys(data.error).map(item=> {
                this.setState({
                    validation: { ...this.state.validation, [item]: data.error[item] }
                });
            });
        }
	}

	handleInputChange = e => {
        if(e.target.name === 'method') {
            this.setState({ ...this.state.validation, email: false });
            this.setState({ ...this.state.validation, phone: false });

            if(e.target.value === 'phone') {
                document.getElementById('contactPhoneLabel').classList.add('required');
                document.getElementById('contactEmailLabel').classList.remove('required');
            }
            else {
                document.getElementById('contactPhoneLabel').classList.remove('required');
                document.getElementById('contactEmailLabel').classList.add('required');
            }
        }

		this.setState({
			values: { ...this.state.values, [e.target.name]: e.target.value }
		});
	}

	render() {
		const serviceOptions = [];

		servicesOffered.map((services, rowOffset) => {
			services.map((service, index) => {
				const isSelected = (this.state.values.service == service.name);

				serviceOptions.push(
					<option key={ rowOffset + ' - ' + index } value={ service.name } defaultValue={isSelected}>
						{ service.name }
					</option>,
				);
			});
		});

		return(
			<Container id="ContactUs">
				<Row className="justify-content-center">
					<Col sm={10} md={6}>
						<h2 className="mb-3 text-center">Get A Free, No Obligation Quote Today!</h2>
						<p className="text-center">Enquire now by entering your details below or give us a call on: 07912565349 or 07946207329</p>
						<div className="or-divider">OR</div>
						{ !this.state.isSubmitted ? (
							<Form id="contactForm">
                                { this.state.isError ? (
                                    <Alert color="danger">
                                        Missing required fields.
                                    </Alert>
                                ) : (
                                    <div></div>
                                ) }
								<FormGroup>
									<Label for="contactName" className="required">Name:</Label>
									<Input type="text" name="name" id="contactName" value={ this.state.values.name } onChange={ this.handleInputChange } invalid={ this.state.validation.name } required />
								</FormGroup>
								<FormGroup>
									<Label for="contactService">Service:</Label>
									<Input type="select" name="service" id="contactService" onChange={ this.handleInputChange }>
										{ serviceOptions }
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="contactPostcode" className="required">Postcode:</Label>
									<Input type="text" name="postcode" id="contactPostcode" value={ this.state.values.postcode } onChange={ this.handleInputChange } invalid={ this.state.validation.postcode } required />
								</FormGroup>
								<FormGroup>
									<Label for="contactMethod">Preferred contact method:</Label>
									<Input type="select" name="method" id="contactMethod" value={ this.state.values.method } onChange={ this.handleInputChange }>
										<option value="phone" defaultValue>Phone</option>
										<option value="email">Email</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="contactPhone" id="contactPhoneLabel" className="required">Phone:</Label>
									<Input type="text" name="phone" id="contactPhone" value={ this.state.values.phone } onChange={ this.handleInputChange } invalid={ this.state.validation.phone } />
								</FormGroup>
								<FormGroup>
									<Label for="contactEmail" id="contactEmailLabel">Email:</Label>
									<Input type="email" name="email" id="contactEmail" value={ this.state.values.email } onChange={ this.handleInputChange } invalid={ this.state.validation.email } />
								</FormGroup>
								<FormGroup>
									<Label for="contactMessage" className="required">Message:</Label>
									<Input type="textarea" name="message" id="contactMessage" rows="10" value={ this.state.values.message } onChange={ this.handleInputChange } invalid={ this.state.validation.message } required />
								</FormGroup>
								<Button color="primary" block onClick={ this.submitForm }>Submit</Button>
							</Form>
						) : (
							<Alert color="success">
                                Thank you for your enquiry, we'll be in touch soon.
                            </Alert>
						) }
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AppContact;