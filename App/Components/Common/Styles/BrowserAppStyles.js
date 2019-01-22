import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.navBar,
	container: {
		paddingRight: 22,
		paddingLeft: 22,
		backgroundColor: '#ffff',
		flexDirection: 'row'
	},
	modalBrowser: {
		flex: 1
	},
	modalBrowserHeader: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.royalBlue,
		backgroundColor: '#f7f7f7',
		width: Metrics.screenWidth,
		height: Metrics.navBarHeight,
		paddingLeft: 10,
		paddingRight: 10,
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	modalCloseModal: {
		width: 44,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	browserUrl: {
		width: Metrics.screenWidth - 54,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	textUrlBrowser: {
		fontWeight: '400',
		fontSize: 16,
		color: '#7e838c'
	},
	header: {
		backgroundColor: '#fff',
		width: Metrics.screenWidth,
		height: Metrics.navBarHeight,
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'center',
		borderBottomColor: Colors.orangeAccent,
		borderBottomWidth: 2
	},
	headerLeft: {
		width: 54,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	iconChevronLeft: {
		width: 20,
		height: 20
	},
	headerCenter: {
		width: Metrics.screenWidth - 108,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	headerRight: {
		width: 54,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	iconLogoWebView: {
		marginTop: Metrics.doubleSection,
		height: 125,
		width: 125,
		resizeMode: 'contain'
	},
	iconShareWebView: {
		width: 20,
		height: 20
	},
	ActivityIndicatorStyle: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
