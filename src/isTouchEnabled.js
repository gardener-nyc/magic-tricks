export default () => {
	if (!global.document || !global.document.documentElement) return false;
	
	return 'ontouchstart' in global.document.documentElement;
};