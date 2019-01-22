const type = {
	base: 'Avenir-Book',
	bold: 'Avenir-Black',
	emphasis: 'HelveticaNeue-Italic'
};

const size = {
	h1: 38,
	h2: 34,
	h3: 30,
	h4: 26,
	h5: 20,
	h6: 19,
	input: 18,
	regular: 17,
	medium: 14,
	small: 12,
	tiny: 8.5
};

const style = {
	input: {
		fontFamily: type.base,
		fontSize: size.medium
	},
	inputLabel: {
		fontFamily: type.bold,
		fontSize: size.medium
	},
	button: {
		fontFamily: type.base,
		fontSize: size.medium
	},
	navBar: {
		fontFamily: type.base,
		fontSize: size.regular
	}
};

export default {
	type,
	size,
	style
};
