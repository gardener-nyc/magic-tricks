const mdxTableOfContents = require('mdx-table-of-contents');

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/src/content/`,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				compilers: [
					mdxTableOfContents,
				]
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-netlify',
	],
};
