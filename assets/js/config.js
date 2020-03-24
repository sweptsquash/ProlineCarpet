import React from 'react';

import Apartment from '../images/Apartment.png';
import Carpet from '../images/Carpet.png';
import Commercial from '../images/Commercial.png';
import Eco from '../images/Eco.png';
import Floor from '../images/Floor.png';
import Holiday from '../images/Holiday.png';
import Moving from '../images/Moving.png';
import Residential from '../images/Residential.png';

import StairsBefore from '../images/Carpet/stairs-before.png';
import StairsAfter from '../images/Carpet/stairs-after.png';
import FrontroomBefore from '../images/Carpet/frontroom-before.png';
import FrontroomAfter from '../images/Carpet/frontroom-after.png';
import ChairBefore from '../images/Carpet/chair-before.png';
import ChairAfter from '../images/Carpet/chair-after.png';
import KitchenBefore from '../images/Carpet/kitchen-before.png';
import KitchenAfter from '../images/Carpet/kitchen-after.png';
import Kitchen1Before from '../images/Carpet/kitchen1-before.png';
import Kitchen1After from '../images/Carpet/kitchen1-after.png';
import Kitchen2Before from '../images/Carpet/kitchen2-before.png';
import Kitchen2After from '../images/Carpet/kitchen2-after.png';
import FloorBefore from '../images/Carpet/floor-before.png';
import FloorAfter from '../images/Carpet/floor-after.png';

export const servicesOffered = [
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
			url: '/services/commercial-cleaning/',
		},
		{
			title: <div><span>End Of Tenancy<br />Cleaning</span></div>,
			name: 'End Of Tenancy Cleaning',
			image: Moving,
			url: '/services/end-of-tenancy-cleaning/',
		},
		{
			title: <div><span>Holiday Let<br />Cleaning</span></div>,
			name: 'Holiday Let Cleaning',
			image: Holiday,
			url: '/services/holiday-let-cleaning/',
		},
		{
			title: <div><span>Car Seat<br />Valeting</span></div>,
			name: 'Car Seat Valeting',
			image: Eco,
			url: '/services/car-seat-valeting/',
		},
	],
	[
		{
			title: <div><span>Upholstery<br />Cleaning</span></div>,
			name: 'Upholstery Cleaning',
			image: Carpet,
			url: '/services/upholstery-cleaning/',
		},
		{
			title: <div><span>Emergency<br />Waterlogged<br />Extraction</span></div>,
			name: 'Emergency Waterlogged Extraction',
			image: Floor,
			url: '/services/emergency-extraction/',
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
			url: '/services/deep-clean/',
		},
	],
];

export const ServicePhotos = [
	{
		before: StairsBefore,
		after: StairsAfter,
	},
	{
		before: FrontroomBefore,
		after: FrontroomAfter,
	},
	{
		before: ChairBefore,
		after: ChairAfter,
	},
	{
		before: KitchenBefore,
		after: KitchenAfter,
	},
	{
		before: Kitchen1Before,
		after: Kitchen1After,
	},
	{
		before: Kitchen2Before,
		after: Kitchen2After,
	},
	{
		before: FloorBefore,
		after: FloorAfter,
	},
];

export const ServiceFeedback = [
	{
		avatar: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-1/cp0/c8.0.50.50a/p50x50/39883681_314253985997728_5341687462106234880_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_oc=AQkJWGUYa83LIDv3KaiyER41cDjQ9Mc7aQoYd2mCl-48-Jcyv41WTEPyiKr5m2I8-Qc&_nc_ht=scontent-lhr8-1.xx&oh=c6ed510f68c55da7547ab0bb0e059141&oe=5E9E94E5',
		name: 'June Abram',
		message: 'Had Proline out to clean the front room and hallway carpets, they did an amazing job and were so fast. My carpets feel like new and smell beautiful. Very happy with the professional, polite and friendly service I received. Will definitely use this company again, Thank you.',
	},
	{
		avatar: 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/90310955_10158133413735050_3142697926342475776_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_oc=AQnHLC_NI-Elb2s8Ghith2ivHTawrNHIGPV9vORoH_QTCE106mr1OlTCqnySNt_-rJ0&_nc_ht=scontent-lht6-1.xx&oh=ede38ce5fef3c381f7bfc3d0172f120a&oe=5E9EFDC8',
		name: 'Hayley Berry',
		message: 'I had Proline Carpet Cleaners out to do my entire flat. They were polite and did an amazing job. Left my carpets clean and smelling fresh. Much recommended!!!',
	},
	{
		avatar: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t31.0-1/cp0/c0.0.50.50a/p50x50/1487956_1379607162288981_1257220305_o.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_oc=AQmlYLH131BjLSJKY-1PPsAIroJNK1i57ih9by__kFVMgSXqYlgVoHOvo22mkbhKa7U&_nc_ht=scontent-lhr8-1.xx&oh=b199e66e85f2db2b16418471cd709ac1&oe=5E9F3EB9',
		name: 'Reg Dockerty',
		message: 'Excellent service and will have them back to do the job again when needed,very professional',
	},
	{
		avatar: 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/58381283_10156270395582444_4441764515058548736_o.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_oc=AQmQzgaMY_CPR7et46xmoznfaMIAJ_2bR69gKNungQ8Tcjx_xJY11ZmJe2ekaaLatp8&_nc_ht=scontent-lhr8-1.xx&oh=b2f885ec53cc6ff978e4b92aaa3e524c&oe=5EA15FAE',
		name: 'Jenny Barrett',
		message: 'Great service, professional, had sofas and carpet cleaned looks like new again and smells lovely and fresh. Thank you!',
	},
];

export default {
	servicesOffered,
	ServicePhotos,
	ServiceFeedback,
};