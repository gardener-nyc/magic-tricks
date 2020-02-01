import requestFrameDebounce from './requestFrameDebounce';

const Viewport = function() {
	this.isListening = false;
	this.listeners = [];
	this.onScroll = this.onScroll.bind(this);
	this.onScroll = requestFrameDebounce(this.onScroll);
	this.manageWindowEventListener();
};

Viewport.prototype.destroy = function() {
	this.isListening = false;
	this.listeners = [];
	global.removeEventListener('scroll', this.onScroll);
	global.removeEventListener('resize', this.onScroll);
};

Viewport.prototype.listen = function(listener) {
	if (this.listeners.indexOf(listener) > -1) return;
	this.listeners.push(listener);
	this.manageWindowEventListener();
};

Viewport.prototype.unlisten = function(listener) {
	let oldListenerIndex = this.listeners.indexOf(listener);
	if (oldListenerIndex > -1) {
		this.listeners.splice(oldListenerIndex, 1);
	}
	this.manageWindowEventListener();
};

Viewport.prototype.onScroll = function() {
	const position = {
		x: global.pageXOffset,
		y: global.pageYOffset,
		height: global.innerHeight,
		width: global.innerWidth,
	};

	for (let i = 0; i < this.listeners.length; i++) {
		let listener = this.listeners[i];
		if (listener && this.listeners.indexOf(listener) > -1) {
			listener(position);
		}
	}
};

Viewport.prototype.manageWindowEventListener = function() {
	if (
		this.listeners.length &&
		!this.isListening
	) {
		global.addEventListener('scroll', this.onScroll);
		global.addEventListener('resize', this.onScroll);
		this.isListening = true;
	} else if (
		!this.listeners.length &&
		this.isListening
	) {
		global.removeEventListener('scroll', this.onScroll);
		global.removeEventListener('resize', this.onScroll);
		this.isListening = false;
	}
};

export default new Viewport();