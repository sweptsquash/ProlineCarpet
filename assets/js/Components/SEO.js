import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

class SEO extends Component {
	render() {
		const socialTitle = ((this.props.title != null) ? this.props.title + ' | ' : '') + 'Proline Carpet Cleaning';

		return(
			<Helmet
				title={ this.props.title }
				defaultTitle="Proline Carpet Cleaning"
				titleTemplate="%s | Proline Carpet Cleaning"
				meta={[
					{
						name: 'twitter:title',
						content: socialTitle,
					},
					{
						property: 'og:title',
						content: socialTitle,
					},
					{
						property: 'og:url',
						content: this.props.url,
					},
				]}
				link={[
					{
						rel: 'canonical',
						href: this.props.url,
					},
				]}
			/>
		);
	}
}

SEO.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string.isRequired,
};

export default SEO;