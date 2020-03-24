import React, { Component } from 'react';
import {
	Container,
	Row,
	Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

class AppFooter extends Component {
	render() {
		return(
			<div className="app-footer">
				<a className="app-to-top" id="ToTop" onClick={() => { window.scrollTo({ top:0, left:0, behavior: 'smooth' }); }}>
					<FontAwesomeIcon icon={ faChevronUp } />
				</a>
				<footer>
					<svg
						className="waves inverted"
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
					<Container>
						<Row>
							<Col className="text-center">
								Copyright &copy; 2020 Proline Carpet Cleaning
							</Col>
						</Row>
					</Container>
				</footer>
			</div>
		);
	}
}

export default AppFooter;