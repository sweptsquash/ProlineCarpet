import React, { Component } from 'react';
import ReactCompareImage from 'react-compare-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ServicePhotos } from '../config';

class AppPhotos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
			length: (ServicePhotos.length - 1),
		};
	}

	rotateImageContainer(method) {
		let showIndex = this.state.active;

		if(method === 'prev') {
			showIndex -= 1;
		}
		else if(method === 'next') {
			showIndex += 1;
		}

		if(showIndex < 0) {
			showIndex = this.state.length;
		} 
		else if(showIndex > this.state.length) {
			showIndex = 0;
		}

		this.setState({ active: showIndex });
	}

	render() {
		return(
			<div className="comparison">
				{ServicePhotos.map((service, index) => {
					return(
						<div key={ index } id={ 'container-' + index } className={this.state.active === index ? ('') : ('d-none') }>
							<ReactCompareImage leftImage={ service.before } rightImage={ service.after } />
						</div>
					)
				})}
				<a className="comparison-arrow" data-direction="prev" onClick={ () => this.rotateImageContainer('prev') }>
					<FontAwesomeIcon icon={ faChevronLeft } />
				</a>
				<a className="comparison-arrow" data-direction="next" onClick={ () => this.rotateImageContainer('next') }>
					<FontAwesomeIcon icon={ faChevronRight } />
				</a>
				<div className="comparison-label">Before</div>
				<div className="comparison-label">After</div>
			</div>
		);
	}
}

export default AppPhotos;