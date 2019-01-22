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
		marginRight: 16
	},
	wrapperHeaderRight: {
		marginRight: 16
	},
	wrapperSwipeableCard: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red'
	},
	thumbnailSwipeableCard: {
		borderRadius: 5,
		width: 100,
		height: 100
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
		flex: 1
	},
	iconFreeSwipeableCard: {
		width: 40,
		height: 18
	},
	contentSwipeableCardsList: {
		justifyContent: 'center'
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
		marginLeft: 20,
		marginRight: 20
	},
	iconArrowLeft: {
		height: 14,
		width: 14
	},
	contentLesson: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30
	},
	wrapperRadius: {
		borderRadius: 30,
		width: 60,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	lessonNumber: {
		fontWeight: 'normal',
		fontSize: 24,
		color: Colors.whiteAccent
	},
	lessonTitle: {
		fontWeight: 'normal',
		fontSize: 18,
		color: Colors.lightgrey
	},
	lessonAbout: {
		fontWeight: 'normal',
		fontSize: 14,
		color: Colors.greyAccent
	},
	actionButtonStyle: {
		borderRadius: 5,
		backgroundColor: Colors.orangeAccent
	},
	containerBackground: {
		width: '100%',
		height: 370
	},
	buttonAbsolute: {
		position: 'absolute',
		top: 40,
		left: 20
	},
	subTitleStyle: {
		fontWeight: 'normal',
		fontSize: 10,
		color: Colors.skinnerBlack,
		opacity: 0.6
	},
	contentYoutube: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20
	},
	wrapperYoutube: {
		width: 250,
		height: 160,
		backgroundColor: Colors.black,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5
	},
	iconYoutube: {
		width: 50,
		height: 50
	},
	descriptionStyle: {
		fontWeight: 'normal',
		fontSize: 14,
		color: Colors.skinnerBlack
	}
});
