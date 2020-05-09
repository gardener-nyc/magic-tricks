const React = require('react');
const Layout = require('./src/components/Layout').default;

// Wrap every page with the main layout
exports.wrapPageElement = ({element, props}) => (
	<Layout {...props}>{element}</Layout>
);