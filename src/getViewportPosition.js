export default () => {
	return global.scrollY || global.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
};