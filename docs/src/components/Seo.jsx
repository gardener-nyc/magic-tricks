import React from 'react';
import Helmet from 'react-helmet';

export default ({
	metaTitle = 'Magic Tricks',
	metaDescription,
	metaKeywords,
	openGraphTitle = 'Magic Tricks',
	openGraphDescription,
	openGraphImage,
	openGraphSiteName = 'Magic Tricks',
	twitterUser = '@gardener_nyc',
	twitterTitle = 'Magic Tricks',
	twitterDescription,
	twitterImage,
	pathname = '/',
	rootUrl = 'https://magictricks.org',
}) => (
	<Helmet>
		{metaTitle && (
			<title>{metaTitle}</title>
		)}
		{metaDescription && (
			<meta
				name="description"
				content={metaDescription}
			/>
		)}
		<meta
			name="keywords"
			content={metaKeywords}
		/>

		<meta
			property="og:url"
			content={`${rootUrl}${pathname}`}
		/>
		<meta
			property="og:title"
			content={openGraphTitle}
		/>
		<meta
			property="og:site_name"
			content={openGraphSiteName}
		/>
		<meta
			property="og:description"
			content={openGraphDescription}
		/>
		{openGraphImage && (
			<meta
				property="og:image"
				content={openGraphImage.url}
			/>
		)}
		
		<meta
			name="twitter:site"
			content={twitterUser}
		/>
		<meta
			name="twitter:card"
			content="summary_large_image"
		/>
		<meta
			name="twitter:title"
			content={twitterTitle}
		/>
		<meta
			name="twitter:description"
			content={twitterDescription}
		/>
		<meta
			name="twitter:url"
			content={`${rootUrl}${pathname}`}
		/>
		{twitterImage && (
			<meta
				name="twitter:image:src"
				content={twitterImage.url}
			/>
		)}
	</Helmet>
);