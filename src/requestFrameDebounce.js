import requestAnimationFrame from './requestAnimationFrame';

export default callback => {
	let isUpdating = false;
	
	const updateFrame = () => {
		callback();
		isUpdating = false;
	};

	return () => {
		if (isUpdating) return;

		isUpdating = true;
		requestAnimationFrame(updateFrame);
	};
};