export default (string, quantity, pluralString) => {
	pluralString = pluralString || string + 's';
	return quantity === 1 ? string : pluralString;
};