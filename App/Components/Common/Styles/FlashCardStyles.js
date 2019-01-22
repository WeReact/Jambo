import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		backgroundColor: '#fff',
		flex: 1
	},
	flashInitContainer: {
		backgroundColor: 'transparent',
		flex: 1,
		paddingTop: 18,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	flashInitHeader: {
		maxWidth: 272,
		marginBottom: 12,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flashInitHeaderText: {
		textAlign: 'center',
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '900',
		fontSize: 34,
		color: '#ec0174'
	},
	flashInitContent: {
		maxWidth: 272,
		paddingTop: 16,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	flashInitContentText: {
		textAlign: 'center',
		// fontFamily: Fonts.type.latoRegular,
		fontSize: 16,
		color: Colors.standartText
	},
	flashInitHelp: {
		width: Metrics.screenWidth - 48,
		marginBottom: 38,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	flashInitHelpTitle: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: 'bold',
		fontSize: 24,
		color: Colors.standartText
	},
	flashInitHelpText: {
		textAlign: 'center',
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	flashInitContentScore: {
		textAlign: 'center',
		// fontFamily: Fonts.type.latoBlack,
		fontWeight: '900',
		fontSize: 28,
		color: Colors.standartText
	},
	buttonInitFlash: {
		width: 147,
		marginTop: 16,
		marginBottom: 12
	},
	iconFlashcardInactive: {
		width: 19,
		height: 21
	},
	iconFlashcardActive: {
		width: 19,
		height: 21
	},
	iconTimePractice: {
		width: 181,
		height: 173
	},
	flashScoreDetail: {
		flex: 1,
		paddingTop: 50,
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flashScoreAction: {
		paddingTop: 24,
		paddingBottom: 24
	},
	flashWrapperCorrect: {
		marginRight: 20,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	flashWrapperIncorrect: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	flashCircleCorrect: {
		borderRadius: 22 / 2,
		backgroundColor: '#6bda83',
		width: 22,
		height: 22,
		marginBottom: 2,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flashCorrectText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: 'bold',
		fontSize: 20,
		color: '#6bda83'
	},
	flashCircleIncorrect: {
		borderRadius: 22 / 2,
		backgroundColor: '#fc6767',
		width: 22,
		height: 22,
		marginBottom: 2,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flashIncorrectText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: 'bold',
		fontSize: 20,
		color: '#fc6767'
	},
	headerTitleText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '500',
		fontSize: 17,
		color: Colors.standartText
	},
	buttonHelp: {
		width: 54,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	iconHelp: {
		width: 24,
		height: 24
	},
	splashWrapperScreen: {
		backgroundColor: '#fff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	splashLoading: {
		width: 80,
		height: 80
	},
	helpSpace: {
		marginTop: 24
	},
	helpText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	modalOutside: {
		width: 1,
		height: 1,
		overflow: 'hidden'
	},
	flashCountWrapper: {
		marginBottom: 8
	},
	questionsWrapper: {
		backgroundColor: '#fff',
		flex: 1
	},
	questionsContainer: {
		backgroundColor: '#fff',
		flex: 1
	},
	questionsWrapperHeader: {
		width: Metrics.screenWidth,
		height: Metrics.navBarHeight,
		alignItems: 'flex-end',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	questionsHeader: {
		width: Metrics.screenWidth,
		height: 44,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	questionsHeaderText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '500',
		fontSize: 17,
		color: Colors.standartText
	},
	questionsBody: {
		paddingTop: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	questionsFooter: {
		width: Metrics.screenWidth,
		paddingTop: 10,
		paddingBottom: 10,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	buttonCancel: {
		backgroundColor: '#fc6767',
		borderRadius: 48 / 2,
		width: 48,
		height: 48,
		marginRight: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonDisabledCancel: {
		backgroundColor: '#dcdcdc',
		borderRadius: 48 / 2,
		width: 48,
		height: 48,
		marginRight: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonSuccess: {
		backgroundColor: '#6bda83',
		borderRadius: 48 / 2,
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonDisabledSuccess: {
		backgroundColor: '#dcdcdc',
		borderRadius: 48 / 2,
		width: 48,
		height: 48,
		alignItems: 'center',
		justifyContent: 'center'
	},
	questionsCard: {
		width: Metrics.screenWidth - 48,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - Metrics.navBarHeight - 198
				: Metrics.screenHeight - Metrics.navBarHeight - 230,
		position: 'relative',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	flashCard: {
		width: Metrics.screenWidth - 48,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - Metrics.navBarHeight - 198
				: Metrics.screenHeight - Metrics.navBarHeight - 230
	},
	floatQuestionContent: {
		backgroundColor: 'transparent',
		width: Metrics.screenWidth - 48,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - Metrics.navBarHeight - 198
				: Metrics.screenHeight - Metrics.navBarHeight - 230,
		paddingLeft: 24,
		paddingRight: 24,
		position: 'absolute',
		top: 0,
		left: 0,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	iconFlashcardCorrect: {
		width: 22.3,
		height: 17.8
	},
	iconFlashcardWrong: {
		width: 17.8,
		height: 17.8
	},
	iconFlashcardCorrectMini: {
		width: 9.4,
		height: 7.4
	},
	iconFlashcardWrongMini: {
		width: 7.4,
		height: 7.4
	},
	questionsCardText: {
		textAlign: 'center',
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '700',
		fontSize: 25,
		color: '#f21373'
	},
	questionsCardTextLink: {
		textAlign: 'center',
		textDecorationLine: 'underline',
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '700',
		fontSize: 25,
		color: '#f21373'
	},
	iconNavBar: {
		width: 24,
		height: 24
	},
	buttonLeft: {
		width: 54,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonRight: {
		width: 54,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center'
	},
	questionsWrapperProgress: {
		width: Metrics.screenWidth - 48,
		alignItems: 'center',
		marginBottom: 12,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	questionsProgressText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 14,
		color: Colors.standartText
	},
	questionsProgressCount: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 14,
		color: Colors.standartText
	},
	questionsProgress: {
		borderRadius: 4,
		backgroundColor: '#f1f2f5',
		width: Metrics.screenWidth - 48,
		height: 8,
		marginTop: 12,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	questionsProgressBar: {
		borderRadius: 4,
		backgroundColor: Colors.orangeAccent,
		height: 8
	},
	card: {
		borderWidth: 0
	},
	titleContainerStyle: {
		padding: 0
	},
	bodyContainerStyle: {
		flex: 0,
		paddingTop: 0,
		paddingLeft: 24,
		paddingRight: 24
	},
	hideOverlayModal: {
		width: 1,
		height: 1,
		overflow: 'hidden'
	},
	floatQuestionContentImage: {
		borderRadius: 10,
		width: Metrics.screenWidth - 108,
		height: Metrics.screenHeight - Metrics.navBarHeight - 288,
		overflow: 'hidden',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flashcardFrontImage: {
		width: Metrics.screenWidth - 108,
		height: Metrics.screenHeight - Metrics.navBarHeight - 288
	},
	mediaType: {
		borderTopLeftRadius: 13,
		borderTopRightRadius: 13,
		backgroundColor: '#f1f2f5',
		width: Metrics.screenWidth - 108,
		overflow: 'hidden',
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	mediaTypeImage: {
		backgroundColor: '#e5e8ee',
		width: Metrics.screenWidth - 108,
		paddingTop: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 10,
		alignItems: 'flex-start',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	mediaTypeContent: {
		borderBottomLeftRadius: 13,
		borderBottomRightRadius: 0,
		paddingTop: 7,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 7
	},
	mediaTypeContentTitle: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	mediaTypeContentUrl: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: '#4a90e2'
	},
	mediaTypeBrowser: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: '#4a90e2'
	},
	mediaTypeThumb: {
		width: 50,
		height: 50
	},
	mediaTypeHeader: {
		width: Metrics.screenWidth - 175,
		paddingLeft: 5,
		paddingRight: 5,
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	mediaTypeTitle: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	mediaTypeContentText: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: Colors.standartText
	},
	scoreContainerWrapper: {
		flex: 1,
		alignItems: 'center'
	},

	modalBrowser: {
		flex: 1
	},
	modalBrowserHeader: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.navBarBorderBottom,
		backgroundColor: Colors.navBarDefault,
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
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '400',
		fontSize: 16,
		color: '#7e838c'
	},
	mediaTypeBrowser: {
		// fontFamily: Fonts.type.latoRegular,
		fontWeight: '700',
		fontSize: 14,
		color: '#ec0075'
	},
	tapToFlipWrapper: {
		width: Metrics.screenWidth,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tapToFlipImage: {
		width: 115,
		height: 28
	},
	footerWrapper: {
		flexDirection: 'row'
	},
	scrollContainer: {
		flex: 1,
		marginTop: 15,
		marginBottom: 25
	}
});
