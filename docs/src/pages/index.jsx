import React from 'react';
import Seo from '../components/Seo';

export default ({
	pageContext,
	location,
}) => {
	const {seo = {}} = pageContext;
	
	return (
		<React.Fragment>
			<Seo
				metaTitle={seo.metaTitle}
				metaDescription={seo.metaDescription}
				metaKeywords={seo.metaKeywords}
				openGraphTitle={seo.openGraphTitle}
				openGraphDescription={seo.openGraphDescription}
				openGraphImage={seo.openGraphImage}
				twitterTitle={seo.twitterTitle}
				twitterDescription={seo.twitterDescription}
				twitterImage={seo.twitterImage}
				pathname={location.pathname}
			/>
			home
		</React.Fragment>
	);
};