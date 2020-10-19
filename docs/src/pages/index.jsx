import React from 'react';
import Seo from '../components/Seo';
import DocsHeader from '../components/DocsHeader';
import {version} from '../../../package.json';
import { Link } from 'gatsby';

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
			<DocsHeader />
			<div className="grid-container contained home__container df fdc jcc tc">
				<div>
					<h1 className="mono--large mb2">
						magic tricks <span className="o50">{version}</span>
					</h1>
					<p className="mb4">
						a light bag of tricks to make building websites quick and fun.
					</p>
					<Link
						className="button--primary"
						title="Get Started"
						to="/docs/getting-started">
						Get Started
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};