import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	logo: {
		marginTop: Metrics.doubleSection,
		height: Metrics.images.logo,
		width: Metrics.images.logo,
		resizeMode: 'contain'
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	wrapperTabBarLabel: {
		marginTop: 15
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperItem: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		margin: 16
	},
	headerLabelStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	},
	wrapperHeaderLeft: {
		marginLeft: 16
	},
	wrapperHeaderRight: {
		marginRight: 16
	},

	keyboard: {
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - 100 - Metrics.navBarHeight - 28
				: Metrics.screenHeight - 129 - Metrics.navBarHeight - 92
	},
	containerKeyboard: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	keybordForm: {
		paddingTop: 24,
		paddingHorizontal: 16
	},
	keyboardGroup: {
		backgroundColor: Colors.background,
		width: Metrics.screenWidth - 32,
		paddingBottom: 9,
		paddingHorizontal: 16,
		marginBottom: 16,
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	keyboardLast: {
		marginBottom: 16
	},
	keyboardAction: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	keyboardNotAccess: {
		paddingTop: 20
	},
	keyboardNotAccessText: {
		textAlign: 'center',
		fontSize: 13,
		color: '#031f5e'
	},
	keyboardWave: {
		width: Metrics.screenWidth,
		height: 88
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 14,
		marginTop: 30
	},
	input: {
		width: Metrics.screenWidth - 104,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 0,
		marginTop: 0,
		backgroundColor: Colors.background
	},
	buttonRecoverPassword: {
		marginRight: 37
	},
	buttonRecoverPasswordText: {
		fontWeight: 'bold',
		fontSize: 13,
		color: Colors.black
	},
	buttonLogIn: {
		// borderRadius: 25,
		// borderWidth: 1,
		// borderColor: Colors.purpleAccent,
		backgroundColor: Colors.purpleAccent,
		// flex: 1,
		width: Metrics.screenWidth - 100,
		height: 53,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		marginVertical: 0
	},
	buttonLogInDisabled: {
		borderRadius: 26.5,
		borderWidth: 1,
		borderColor: '#cecece',
		backgroundColor: '#cecece',
		flex: 1,
		height: 53,
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 0,
		marginVertical: 0
	},
	buttonRegisteredLabel: {
		fontWeight: 'bold',
		fontSize: 13,
		color: '#fff'
	},
	buttonRegistered: {
		borderRadius: 25,
		borderWidth: 2,
		borderColor: Colors.purpleAccent,
		backgroundColor: Colors.purpleAccent,
		width: Metrics.screenWidth - 32,
		height: 53,
		marginTop: 16,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	buttonLogInLabel: {
		fontWeight: 'bold',
		fontSize: 13,
		color: '#fff'
	},
	inputAccessory: {
		width: 30,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	actionButtonStyle: {
		borderRadius: 5,
		width: Metrics.screenWidth - 60,
		backgroundColor: Colors.orangeAccent
	},
	signupStyle: {
		alignItems: 'center',
		// flexDirection: 'row',
		justifyContent: 'center'
	},
	signupTextStyle: {
		fontSize: 13,
		color: Colors.black
	}
});
