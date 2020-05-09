// Setup environment variables
require('dotenv').config({path: `.env.${process.env.NODE_ENV || 'development'}`});

const {
	getAllPageData,
	createAllPages,
} = require('./src/build/createPages');

exports.createPages = ({actions}) => new Promise((resolve, reject) => {
	getAllPageData()
		.then(allResponses => createAllPages(
			allResponses,
			actions,
			resolve,
			reject
		));
});