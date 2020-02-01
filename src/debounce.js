export default (func, wait, immediate) => {
	let timeout;

	return function() {
		const context = this;
		const args = arguments;
		const callNow = immediate && !timeout;
		
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		clearTimeout(timeout);
		
		timeout = setTimeout(later, wait);
		
		if (callNow) func.apply(context, args);
	};
};