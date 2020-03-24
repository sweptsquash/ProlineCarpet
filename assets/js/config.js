import React from 'react';

import Apartment from '../images/Apartment.png';
import Carpet from '../images/Carpet.png';
import Commercial from '../images/Commercial.png';
import Eco from '../images/Eco.png';
import Floor from '../images/Floor.png';
import Holiday from '../images/Holiday.png';
import Moving from '../images/Moving.png';
import Residential from '../images/Residential.png';

const servicesOffered = [
	[
		{
			title: <div><span>Domestic<br/>Cleaning</span></div>,
			name:  'Domestic Cleaning',
			image: Residential,
			url: '/services/domestic-cleaning/',
		},
		{
			title: <div><span>Commercial<br />Cleaning</span></div>,
			name: 'Commercial Cleaning',
			image: Commercial,
			url: '',
		},
		{
			title: <div><span>End Of Tenancy<br />Cleaning</span></div>,
			name: 'End Of Tenancy Cleaning',
			image: Moving,
			url: '',
		},
		{
			title: <div><span>Holiday Let<br />Cleaning</span></div>,
			name: 'Holiday Let Cleaning',
			image: Holiday,
			url: '',
		},
		{
			title: <div><span>Car Seat<br />Valeting</span></div>,
			name: 'Car Seat Valeting',
			image: Eco,
			url: '',
		},
	],
	[
		{
			title: <div><span>Upholstery<br />Cleaning</span></div>,
			name: 'Upholstery Cleaning',
			image: Carpet,
			url: '',
		},
		{
			title: <div><span>Emergency<br />Waterlogged<br />Extraction</span></div>,
			name: 'Emergency Waterlogged Extraction',
			image: Floor,
			url: '',
		},
		{
			title: <div><span>Carpet<br />Cleaning</span></div>,
			name: 'Carpet Cleaning',
			image: Carpet,
			url: '/services/carpet-cleaning',
		},
		{
			title: <div><span>One Off<br />Deep Cleaning</span></div>,
			name: 'One Off Deep Cleaning',
			image: Apartment,
			url: '',
		},
	],
];

export default servicesOffered;