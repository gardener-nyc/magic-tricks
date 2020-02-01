export default initialState => {
	let previousState = null;
	let currentState = initialState;
	let listeners = [];

	const triggerListeners = () => {
		for (var i = 0; i < listeners.length; i++) {
			var listener = listeners[i];
			if (listener && listeners.indexOf(listener) > -1) {
				listener(currentState, previousState);
			}
		}
	};

	const setState = newState => {
		previousState = currentState;
		currentState = Object.assign({}, currentState, newState);
		triggerListeners();
	};

	const getState = () => currentState;

	const listen = newListener => {
		if (listeners.indexOf(newListener) > -1) return;
		listeners.push(newListener);
	};

	const unlisten = oldListener => {
		let oldListenerIndex = listeners.indexOf(oldListener);
		if (oldListenerIndex > -1) {
			listeners.splice(oldListenerIndex, 1);
		}
	};

	return {
		getState,
		setState,
		listen,
		unlisten,
	};
};