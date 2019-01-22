import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

export default StyleSheet.create({
	container: {
		width: Metrics.screenWidth,
		height: 75,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		marginBottom: 25
	},
	leftActionWrapper: {
		flex: 0.5,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		paddingLeft: 10
	},
	wrapper: {
		alignItems: 'center',
		height: 50
	},
	content: {
		flex: 1,
		height: Metrics.navBarHeight - 40,
		flexDirection: 'row',
		marginTop: 20,
		marginLeft: 14,
		marginRight: 14,
		alignItems: 'center'
	},
	wrapperBar: {
		height: 44
	},
	barStyle: {
		borderRadius: 3,
		backgroundColor: Colors.orangeAccent,
		width: 3,
		height: '100%',
		marginRight: 19
	},
	wrapperTitle: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	titleStyle: {
		fontFamily: 'Avenir-Black',
		fontWeight: '900',
		fontSize: 24,
		color: '#676767'
	}
});
