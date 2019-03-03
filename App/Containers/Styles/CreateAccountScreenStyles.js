import { StyleSheet } from 'react-native';
import { iPhoneSize } from '../../Lib/Utils';
import { Colors } from '../../Themes';

let headingTextSize = 30;
if (iPhoneSize() === 'small') {
	headingTextSize = 26;
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flex: 1
	},
	scrollViewWrapper: {
		marginTop: 70,
		flex: 1,
		padding: 0,
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},
	scrollView: {
		paddingTop: 20,
		flex: 1
	},
	loginHeader: {
		fontSize: headingTextSize,
		color: Colors.white,
		fontWeight: '300',
		marginBottom: 40
	},
	notificationWrapper: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	},
	//
	privacyOptionItem: {
		flex: 1,
		padding: 20
	},
	privacyOptionTitle: {
		fontSize: 14,
		fontWeight: '700',
		color: Colors.white
	},
	privacyOptionDescription: {
		fontSize: 14,
		fontWeight: '200',
		color: Colors.white,
		marginTop: 10,
		paddingRight: 90
	},
	privacyRadioInput: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	inputWrapper: {
		paddingLeft: 20,
		paddingRight: 20
	},
	divider: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.gray06,
		height: 1,
		flex: 1,
		marginLeft: 20,
		marginRight: 20
	},
	wrapperButton: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		marginRight: 20,
		marginBottom: 20
	},
	createButton: {
		width: 140,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonIcon: {
		position: 'absolute',
		right: 0,
		top: '50%',
		marginTop: -16
	}
});

export default styles;