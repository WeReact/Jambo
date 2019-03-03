/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
import { iPhoneSize } from '../../Lib/Utils';
import { Colors, Metrics } from '../../Themes';

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
		backgroundColor: Colors.orangeAccent
	},
	welcomeWrapper: {
		flex: 1,
		display: 'flex',
		marginTop: 30,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		// width: 50,
		// height: 50,
		// marginTop: 50,
		// marginBottom: 40
		marginTop: Metrics.doubleSection,
		height: Metrics.images.logo,
		width: Metrics.images.logo,
		resizeMode: 'contain'
	},
	welcomeText: {
		fontSize: headingTextSize,
		color: Colors.white,
		fontWeight: '300',
		marginBottom: 40
	},
	facebookButtonIcon: {
		color: Colors.orangeAccent,
		position: 'relative',
		left: 20,
		zIndex: 8
	},
	moreOptionsButton: {
		marginTop: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
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
