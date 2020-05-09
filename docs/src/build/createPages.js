//
// === Get Data ===
//

module.exports.getAllPageData = () => {
	// Wait for all data needs
	return Promise.all([
		new Promise(resolve => resolve()),
	]);
};

//
// === Create All Pages ===
//

module.exports.createAllPages = (
	promiseResults,
	actions,
	resolve,
	reject
) => {
	//
	// === Create Contexts ===
	//
	
	const sharedContext = {};

	//
	// === Create pages ===
	//
	
	try {
		// Homepage
		actions.createPage({
			path: '/',
			component: require.resolve('../templates/Home.jsx'),
			context: {
				...sharedContext,
			},
		});

		// 404
		actions.createPage({
			path: '/404',
			component: require.resolve('../templates/404.jsx'),
			context: {
				...sharedContext
			},
		});

		//
		// === Redirects ===
		//
		// Redirects are handled in static/_redirects
	} catch(error) {
		reject(error);
		return;
	}

	resolve();
};