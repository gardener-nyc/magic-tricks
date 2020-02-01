import getViewportPosition from './getViewportPosition';
import {easeInOutQuint} from './easing';

const move = scrollTop => {
	global.scrollTo(0, scrollTop);
};

export default (to, duration = 1000, callback = () => {}) => {
	const start = getViewportPosition();
	const change = to - start;
	let startTimestamp = new Date();

	const animateScroll = function() {
		const now = new Date();
		const currentTime = now - startTimestamp;
		const val = easeInOutQuint(currentTime, start, change, duration);

		move(val);

		if (currentTime < duration) {
			requestAnimationFrame(animateScroll);
		} else {
			move(to);
			callback();
		}
	};

	animateScroll();
};