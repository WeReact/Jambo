/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
import { iPhoneSize } from '../../Lib/Utils';
import { Colors } from '../../Themes/';

let termsTextSize = 13;
let headingTextSize = 30;
if (iPhoneSize() === 'small') {
	termsTextSize = 12;
	headingTextSize = 26;
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		display: 'flex',
		backgroundColor: Colors.green01
	},
	welcomeWrapper: {
		flex: 1,
		display: 'flex',
		marginTop: 30,
		padding: 20
	},
	logo: {
		width: 50,
		height: 50,
		marginTop: 50,
		marginBottom: 40
	},
	welcomeText: {
		fontSize: headingTextSize,
		color: Colors.white,
		fontWeight: '300',
		marginBottom: 40
	},
	facebookButtonIcon: {
		color: Colors.green01,
		position: 'relative',
		left: 20,
		zIndex: 8
	},
	moreOptionsButton: {
		marginTop: 10
	},
	moreOptionsButtonText: {
		color: Colors.white,
		fontSize: 16
	},
	termsAndConditions: {
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
		marginTop: 30
	},
	termsText: {
		color: Colors.white,
		fontSize: termsTextSize,
		fontWeight: '600'
	},
	linkButton: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.white
	}
});

export default styles;