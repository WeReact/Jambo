import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	wrapperInfo: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - 50
				: Metrics.screenHeight - 70,
		flex: 1
	},
	wrapperSectionTitle: {
		marginTop: 40,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	wrapperHeaderLeft: {
		marginTop: 20,
		marginLeft: 16
	},
	iconArrowLeft: {
		width: 24,
		height: 24
	},
	sectionTitleStyle: {
		fontWeight: 'normal',
		fontSize: 22,
		color: Colors.skinnerBlack
	}
});
