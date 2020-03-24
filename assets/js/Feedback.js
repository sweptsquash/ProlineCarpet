import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Feedback extends Component {
	render() {
		return(
			<div>
				<Helmet titleTemplate="%s | Proline Carpet Cleaning">
					<title>Feedback</title>
					<link rel="canonical" href="https://www.prolinecarpet.co.uk/feedback/" />
					<meta property="og:url" content="https://www.prolinecarpet.co.uk/feedback/" />
					<meta property="og:title" content="Feedback | Proline Carpet Cleaning" />
				</Helmet>
				Feedback
			</div>
		);
	}
}

export default Feedback;