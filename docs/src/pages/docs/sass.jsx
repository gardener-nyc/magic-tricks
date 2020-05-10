import React from 'react';
import Seo from '../../components/Seo';
import Docs from '../../layouts/Docs';
import allPages from '../../config/pages';
import Sass, {tableOfContents} from '../../content/sass.mdx';

export default ({
	pageContext,
	location,
	...props
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
			<Docs
				activePathname={location.pathname}
				tableOfContents={tableOfContents()}
				links={allPages}>
				<Sass />
			</Docs>
		</React.Fragment>
	);
};