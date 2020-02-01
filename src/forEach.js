export default (domNodeList, callback) => {
	let mappedReturns = [];

	for (let i = 0; i < domNodeList.length; i++) {
		mappedReturns.push(callback(domNodeList[i], i));
	}

	return mappedReturns;
};