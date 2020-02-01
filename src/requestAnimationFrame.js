const TIMEOUT_FRAME = 1000 / 60;

const setTimeoutPolyfill = callback => {
	setTimeout(callback, TIMEOUT_FRAME);
};

const requestAnimationFrame = 	global.requestAnimationFrame       ||
								global.webkitRequestAnimationFrame ||
								global.mozRequestAnimationFrame    ||
								global.oRequestAnimationFrame      ||
								global.msRequestAnimationFrame     ||
								setTimeoutPolyfill;

export default requestAnimationFrame;