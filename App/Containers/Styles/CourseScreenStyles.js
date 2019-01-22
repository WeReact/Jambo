import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

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
		marginTop: Platform.OS === 'ios' ? 15 : 0
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
	wrapperSwipeableCard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	thumbnailSwipeableCard: {
		borderRadius: 5,
		width: 335,
		height: 160
	},
	titleSwipeableCard: {
		fontWeight: 'normal',
		fontSize: 18,
		color: Colors.lightgrey,
		textAlign: 'center'
	},
	hoursSwipeableCard: {
		fontWeight: 'normal',
		fontSize: 15,
		color: Colors.skinnerBlack
	},
	iconHourSwipeableCard: {
		width: 14,
		height: 14
	},
	wrapperHour: {
		flexDirection: 'row',
		paddingTop: 10,
		marginBottom: 30,
		flex: 1,
		alignItems: 'center'
	},
	iconFreeSwipeableCard: {
		width: 40,
		height: 18
	},
	contentSwipeableCardsList: {
		justifyContent: 'center'
	},
	wrapperSwipeableCard: {
		flex: 1,
		alignItems: 'center'
	},
	aboutSwipeableCard: {
		fontWeight: 'normal',
		fontSize: 12,
		color: Colors.lightgrey
	},
	sectionTitleStyle: {
		fontWeight: 'normal',
		fontSize: 22,
		color: Colors.skinnerBlack
	},
	wrapperContent: {
		marginTop: Metrics.section,
		flex: 1,
		marginLeft: 20,
		marginRight: 20
	},
	wrapperSectionTitle: {
		paddingBottom: 10,
		marginTop: Platform.OS === 'ios' ? 50 : 40,
		marginLeft: 20,
		marginRight: 20
	}
});
