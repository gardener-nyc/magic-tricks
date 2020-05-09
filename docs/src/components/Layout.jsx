import '../styles/main.scss';

import React from 'react';
import Helmet from 'react-helmet';

export default ({
	children
}) => (
	<React.Fragment>
		<Helmet defaultTitle="Magic Tricks" />
		<Helmet>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
			/>
		</Helmet>
		{children}
	</React.Fragment>
);