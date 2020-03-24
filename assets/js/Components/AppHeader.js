import React, { Component } from 'react';
import {
	Button,
	Collapse,
	Container,
	Row,
	Col,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { servicesOffered } from '../config';

import ProlineLogo from '../../images/ProlineLogo.png';

class AppHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		const scrollPercentage = (document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight) * 100;

		if(scrollPercentage > 10) {
			if(!document.getElementById('app-navbar').classList.contains('solid')) {
				document.getElementById('app-navbar').classList.add('solid');
				document.getElementById('ToTop').classList.add('show');
			}
		}
		else if(document.getElementById('app-navbar').classList.contains('solid')) {
			document.getElementById('app-navbar').classList.remove('solid');
			document.getElementById('ToTop').classList.remove('show');
		}
	}

	render() {
		const toggle = () => {
			this.setState({ isOpen: !this.state.isOpen });
		};

		const dropdownOptions = [];

		servicesOffered.map((services, rowOffset) => {
			services.map((service, index) => {
				dropdownOptions.push(
					<DropdownItem key={ rowOffset + ' - ' + index } href={ service.url }>
						{ service.name }
					</DropdownItem>,
				);
			});
		});

		return(
			<div>
				<Navbar id="app-navbar" expand="md" fixed="top">
					<Container fluid={false}>
						<NavbarToggler onClick={ toggle } />
						<NavbarBrand href="/">
							<img src={ ProlineLogo } alt="Proline Carpet Cleaning" />
						</NavbarBrand>
						<Collapse isOpen={ this.state.isOpen } navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="/">Home</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Services
									</DropdownToggle>
									<DropdownMenu className="text-center" right>
										{ dropdownOptions }
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<NavLink href="/#Feedback">Feedback</NavLink>
								</NavItem>
								<NavItem>
									<NavLink href="/contact-us">Contact Us</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href="https://www.facebook.com/prolinecarpetcleaning/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<FontAwesomeIcon icon={ faFacebookF } />
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href="https://www.instagram.com/prolinecarpetcleaning/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<FontAwesomeIcon icon={ faInstagram } />
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
				<header className="app-header">
					<Container>
						<Row>
							<Col sm={ 12 } md={ 6 } xl={ 8 }>
								<img src={ ProlineLogo } alt="Proline Carpet Cleaning" className="app-logo" />
							</Col>
							<Col sm={ 12 } md={ 6 } xl={ 4 } className="text-center">
								<p>
									Friendly Reliable Service.<br />
									Get your free quote today.
								</p>
								<Button color="primary" className="mr-2" onClick={() => { document.getElementById('ContactUs').scrollIntoView({ behavior: 'smooth' }); }}>Get A Quote</Button>
								<Button outline color="primary" href="/#OurServices">Our Services</Button>
							</Col>
						</Row>
					</Container>
					<svg
						className="waves"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 1440 320"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path id="gentle-wave" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,133.3C672,149,768,203,864,192C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
						</defs>
						<g className="parallax">
							<use xlinkHref="#gentle-wave" x="0" y="50" className="lighter-wave" />
							<use xlinkHref="#gentle-wave" x="0" y="0" className="darker-wave" />
						</g>
					</svg>
				</header>
			</div>
		);
	}
}

export default AppHeader;