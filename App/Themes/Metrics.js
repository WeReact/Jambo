import { Dimensions, Platform, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const vw = width / 100;
const vh = height / 100;
const pw = width => width * vw; // percent width
const ph = height => height * vh; // percent height

const size = size => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		// console.tron.log('iOS - vw:', vw)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return size * 1;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return size * 1.1;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return size * 1.2;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return size * 1.3;
		} else {
			return size * 1;
		}
	} else {
		if (pixelRatio <= 1) {
			return size * 0.9;
		} else if (pixelRatio <= 1.5) {
			return size * 1;
		} else if (pixelRatio <= 2) {
			return size * 1.1;
		} else if (pixelRatio <= 3) {
			return size * 1.2;
		} else if (pixelRatio <= 3.5) {
			return size * 1.3;
		} else {
			return size * 1.1;
		}
	}
};

const keyboardVerticalOffset = offset => {
	if (Platform.OS === 'ios') {
		// console.tron.log('iOS - pixelRatio:', pixelRatio)
		if (pixelRatio === 2 && vw === 3.2) {
			// 5, SE
			return offset;
		} else if (pixelRatio === 2 && vw === 3.75) {
			// 6, 7, 8
			return offset - 100;
		} else if (pixelRatio === 2 && vw === 4.14) {
			// XR
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// 6, 7, 8 plus
			return offset - 150;
		} else if (pixelRatio === 3 && vw === 3.75) {
			// X, XS
			return offset - 200;
		} else if (pixelRatio === 3 && vw === 4.14) {
			// XS Max
			return offset - 200;
		} else {
			return offset - 100;
		}
	} else {
		// console.tron.log('Android - pixelRatio:', pixelRatio)
		if (pixelRatio <= 1) {
			return offset;
		} else if (pixelRatio <= 1.5) {
			return offset;
		} else if (pixelRatio <= 2) {
			return offset + 20;
		} else if (pixelRatio <= 3) {
			return offset + 50;
		} else if (pixelRatio <= 3.5) {
			return offset + 100;
		} else {
			return offset;
		}
	}
};

const metrics = {
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	doubleBaseMargin: 20,
	images: {
		small: 20,
		medium: 40,
		large: 60,
		logo: 200
	},
	tabBarLabel: {
		paddingLeft: size(2)
	},
	tabBar: {
		...Platform.select({
			ios: {
				paddingTop: size(8),
				height: size(52)
			},
			android: {
				paddingTop: size(8),
				height: size(52)
			}
		})
	},
	signInFloatBackButton: {
		...Platform.select({
			ios: {
				top: size(15)
			},
			android: {
				top: size(15)
			}
		}),
		left: size(15)
	},
	signInFloatBackIcon: {
		width: size(15),
		height: size(13)
	},
	/**
	 * SignUpMainScreenMetrics
	 */
	SignUpMainScreenMetrics: {
		container: {
			marginTop: ph(8),
			marginBottom: ph(6)
		},
		logo: {
			width: size(152),
			height: size(166)
		},
		signInButton: {
			height: size(40),
			width: pw(72),
			borderRadius: size(20),
			marginBottom: size(25)
		},
		getInButton: {
			height: size(40),
			width: pw(72),
			borderRadius: size(20),
			marginBottom: size(25)
		}
	},
	/**
	 * SignUpPhoneScreenMetrics
	 */
	SignUpPhoneScreenMetrics: {
		keyboardVerticalOffset: keyboardVerticalOffset(-50),
		container: {
			marginTop: ph(9),
			marginBottom: ph(6)
		},
		logo: {
			width: size(121),
			height: size(132),
			marginBottom: size(31)
		},
		senAccessCodeButton: {
			height: size(40),
			width: pw(85),
			marginBottom: size(25),
			borderRadius: size(20)
		},
		text: {
			paddingRight: size(20),
			paddingLeft: size(20)
		},
		phoneInputWrapper: {
			borderRadius: size(16),
			paddingTop: size(14),
			paddingBottom: size(14),
			paddingLeft: size(18),
			paddingRight: size(18),
			marginBottom: size(19),
			marginTop: size(8),
			width: pw(85)
		}
	},
	/**
	 * SignUpAccessCodeScreenMetrics
	 */
	SignUpAccessCodeScreenMetrics: {
		keyboardVerticalOffset: keyboardVerticalOffset(-150),
		container: {
			marginTop: ph(9),
			marginBottom: ph(6)
		},
		logo: {
			width: size(121),
			height: size(132),
			marginBottom: size(31)
		},
		senAccessCodeButton: {
			height: size(40),
			width: pw(85),
			marginBottom: size(15),
			borderRadius: size(20)
		},
		text: {
			paddingRight: size(30),
			paddingLeft: size(30)
		},
		accessCodeInputs: {
			marginTop: size(9)
		},
		accessCodeInputWrapper: {
			borderRadius: size(16),
			height: size(50),
			marginRight: size(9),
			width: size(51)
		},
		accessCodeInput: {
			paddingTop: size(14),
			paddingBottom: size(14),
			paddingLeft: size(18),
			paddingRight: size(18)
		},
		wrongAccessCodeMessageContainer: {
			height: size(18),
			marginTop: size(4),
			marginBottom: size(9)
		},
		resendAccessCodeMessageContainer: {
			marginTop: size(15),
			paddingTop: size(7),
			paddingBottom: size(7),
			paddingLeft: size(39),
			paddingRight: size(39),
			width: pw(85.3)
		}
	},
	/**
	 * SignUpFinishScreenMetrics
	 */
	SignUpFinishScreenMetrics: {
		keyboardVerticalOffset: keyboardVerticalOffset(-150),
		container: {
			marginTop: ph(9),
			marginBottom: ph(6)
		},
		logo: {
			width: size(121),
			height: size(132),
			marginBottom: size(31)
		},
		buttons: {
			width: pw(100)
		},
		signInButton: {
			height: size(40),
			width: pw(85),
			marginTop: size(12),
			borderRadius: size(20)
		},
		text: {
			paddingRight: size(60),
			paddingLeft: size(60),
			marginBottom: size(9)
		},
		inputWrapper: {
			borderRadius: size(16),
			paddingTop: size(14),
			paddingBottom: size(14),
			paddingLeft: size(18),
			paddingRight: size(18),
			marginBottom: size(10),
			width: pw(85)
		}
	},
	/**
	 * placesScreenMetrics
	 */
	placesScreenMetrics: {
		filterButton: {
			marginRight: size(9)
		},
		androidFilterIconButton: {
			marginRight: size(15)
		},
		androidFilterIconImage: {
			width: size(25),
			height: size(16)
		},
		searchPlacesInputWrapper: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			width: pw(93)
		},
		searchSection: {
			paddingBottom: size(11),
			paddingTop: size(3),
			marginBottom: size(4),
			marginRight: size(9),
			marginLeft: size(9)
		},
		placeItemContainer: {
			borderRadius: size(2),
			shadowRadius: size(4),
			shadowOpacity: size(1),
			paddingTop: size(8),
			paddingBottom: size(7),
			paddingLeft: size(10),
			paddingRight: size(10),
			marginBottom: size(6),
			marginTop: size(6),
			marginRight: size(10),
			marginLeft: size(10)
		},
		placeItemImage: {
			borderRadius: size(2),
			width: size(100),
			height: size(85),
			marginRight: size(8)
		},
		placeItemsListSectionTitle: {
			marginTop: size(5),
			marginBottom: size(5),
			marginLeft: size(20),
			marginRight: size(20)
		},
		blankStatePlacesContainer: {
			marginRight: size(24),
			marginLeft: size(24),
			marginTop: size(52)
		},
		blankStateButton: {
			height: size(40),
			width: pw(68.8),
			borderRadius: size(20),
			marginBottom: size(100)
		},
		blankStatePlacesImage: {
			height: size(88),
			width: size(88)
		},
		blankStatePlacesTextContainer: {
			paddingBottom: size(21),
			paddingTop: size(21)
		},
		appliedFiltersContainer: {
			paddingLeft: size(12),
			paddingRight: size(12),
			paddingTop: size(5)
		},
		appliedFilter: {
			borderRadius: size(12),
			height: size(24),
			marginRight: size(6),
			paddingLeft: size(11),
			paddingRight: size(11),
			marginBottom: size(5),
			width: pw(44)
		}
	},
	/**
	 * placesFiltersScreenMetrics
	 */
	placesFiltersScreenMetrics: {
		cancelFilterButton: {
			marginLeft: size(9)
		},
		androidFilterConfirmIconButton: {
			marginRight: size(21)
		},
		androidFilterConfirmIconImage: {
			width: size(23),
			height: size(23)
		},
		applyFilterButton: {
			marginRight: size(9)
		},
		searchPlacesInputWrapper: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			width: pw(93)
		},
		searchSection: {
			paddingBottom: size(11),
			paddingTop: size(3),
			marginBottom: size(4),
			marginRight: size(9),
			marginLeft: size(9)
		},
		placeItemContainer: {
			borderRadius: size(2),
			shadowRadius: size(4),
			shadowOpacity: size(1),
			paddingTop: size(8),
			paddingBottom: size(7),
			paddingLeft: size(10),
			paddingRight: size(10),
			marginBottom: size(6),
			marginTop: size(6),
			marginRight: size(10),
			marginLeft: size(10)
		},
		placeItemImage: {
			borderRadius: size(2),
			width: size(100),
			height: size(85),
			marginRight: size(8)
		},
		blankStatePlacesContainer: {
			marginRight: size(24),
			marginLeft: size(24)
		},
		blankStateButton: {
			height: size(40),
			width: pw(68.8),
			borderRadius: size(20),
			marginBottom: size(100)
		},
		blankStatePlacesImage: {
			height: size(88),
			width: size(88)
		},
		blankStatePlacesTextContainer: {
			paddingBottom: size(21),
			paddingTop: size(21)
		},
		filterList: {
			marginTop: size(13),
			marginLeft: size(20)
		},
		filterListItem: {
			paddingTop: size(10),
			paddingBottom: size(10)
		}
	},
	placeDetailsScreenMetrics: {
		header: {
			width: pw(100),
			height: ph(28.5)
		},
		placeNameContainer: {
			paddingLeft: size(14),
			paddingRight: size(50),
			paddingBottom: size(9)
		},
		backButton: {
			...Platform.select({
				ios: {
					top: DeviceInfo.hasNotch() ? size(45) : size(35)
				},
				android: {
					top: size(35)
				}
			}),
			left: size(15)
		},
		floatExpandButton: {
			borderRadius: size(4),
			bottom: size(10),
			height: size(30),
			padding: size(2),
			paddingLeft: size(3),
			right: size(9),
			width: size(30)
		},
		closeFullImageButton: {
			padding: size(10),
			marginLeft: size(10),
			width: size(90)
		},
		floatExpandIcon: {
			width: size(25),
			height: size(26)
		},
		swipeDownThreshold: ph(20),
		fullImageHeaderContainer: {
			...Platform.select({
				ios: {
					marginTop: DeviceInfo.hasNotch() ? size(40) : size(30)
				},
				android: {
					marginTop: size(10)
				}
			}),
			width: pw(100),
			paddingRight: size(10)
		},
		headerLoaderIndicator: {
			...Platform.select({
				ios: {
					marginTop: DeviceInfo.hasNotch() ? size(15) : size(10)
				},
				android: {
					marginTop: size(10)
				}
			})
		},
		mapContainer: {
			height: ph(21.1),
			borderRadius: size(2),
			shadowRadius: size(4),
			marginBottom: size(2)
		},
		registerInfoContainer: {
			marginTop: size(30),
			marginRight: size(15),
			marginLeft: size(15),
			marginBottom: size(25)
		},
		registerActionButtonsContainer: {
			marginTop: size(10),
			marginLeft: size(10),
			marginRight: size(10)
		},
		registerActionButtonResident: {
			marginLeft: size(4),
			paddingTop: size(11),
			paddingBottom: size(11),
			paddingLeft: size(11),
			paddingRight: size(11),
			borderRadius: size(20)
		},
		registerActionButtonVisitant: {
			marginRight: size(4),
			paddingTop: size(11),
			paddingBottom: size(11),
			paddingLeft: size(11),
			paddingRight: size(11),
			borderRadius: size(20)
		},
		addressContainer: {
			width: '74%',
			left: 0,
			top: size(8),
			paddingLeft: size(18),
			paddingRight: size(14),
			paddingTop: size(4),
			paddingBottom: size(8)
		},
		closeAccessSolicitationModalIcon: {
			width: size(16),
			height: size(16)
		},
		closeAccessSolicitationModalButton: {
			top: size(14),
			right: size(14)
		},
		solicitationModal: {
			width: '100%',
			height: '100%'
		},
		solicitationModalContainer: {
			width: '84.4%',
			height: size(315),
			paddingTop: size(28),
			borderRadius: size(8)
		},
		solicitationModalTitle: {
			marginBottom: size(20)
		},
		solicitationModalText: {
			marginBottom: size(22),
			marginRight: size(18),
			marginLeft: size(18)
		},
		solicitationModalInputWrapper: {
			borderRadius: size(16),
			paddingTop: size(8),
			paddingBottom: size(8),
			paddingLeft: size(13),
			paddingRight: size(13),
			marginTop: size(8),
			width: pw(56),
			height: size(36),
			marginBottom: size(31)
		},
		solicitationModalButton: {
			width: size(220),
			height: size(40),
			borderRadius: size(20)
		},
		camList: {
			marginTop: size(14),
			marginBottom: size(20),
			paddingLeft: size(2.5),
			paddingRight: size(2.5),
			width: pw(100)
		},
		camItem: {
			paddingLeft: size(2.5),
			paddingRight: size(2.5),
			marginBottom: size(5),
			width: '33.33%',
			height: size(70)
		},
		camItemImage: {
			width: '100%',
			height: size(70)
		}
	},
	/**
  incidentsScreenMetrics
  */
	incidentsScreenMetrics: {
		filterButton: {
			marginRight: size(9)
		},
		androidFilterIconButton: {
			marginRight: size(15)
		},
		androidFilterIconImage: {
			width: size(25),
			height: size(16)
		},
		searchIncidentsInputWrapper: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			width: pw(93)
		},
		searchSection: {
			paddingBottom: size(11),
			paddingTop: size(3),
			marginBottom: size(4),
			marginRight: size(9),
			marginLeft: size(9)
		},
		placeItemContainer: {
			borderRadius: size(2),
			shadowRadius: size(4),
			shadowOpacity: size(1),
			paddingTop: size(8),
			paddingBottom: size(7),
			paddingLeft: size(10),
			paddingRight: size(10),
			marginBottom: size(6),
			marginTop: size(6),
			marginRight: size(10),
			marginLeft: size(10)
		},
		placeItemImage: {
			borderRadius: size(2),
			width: size(100),
			height: size(85),
			marginRight: size(8)
		},
		IncidenteItemsListSectionTitle: {
			marginTop: size(5),
			marginBottom: size(5),
			marginLeft: size(20),
			marginRight: size(20)
		},
		blankStatePlacesContainer: {
			marginRight: size(24),
			marginLeft: size(24),
			marginTop: size(52)
		},
		blankStateButton: {
			height: size(40),
			width: pw(68.8),
			borderRadius: size(20),
			marginBottom: size(100)
		},
		blankStatePlacesImage: {
			height: size(88),
			width: size(88)
		},
		blankStatePlacesTextContainer: {
			paddingBottom: size(21),
			paddingTop: size(21)
		},
		appliedFiltersContainer: {
			paddingLeft: size(12),
			paddingRight: size(12),
			paddingTop: size(5)
		},
		appliedFilter: {
			borderRadius: size(12),
			height: size(24),
			marginRight: size(6),
			paddingLeft: size(11),
			paddingRight: size(11),
			marginBottom: size(5),
			width: pw(44)
		},
		buttonShadow: {
			shadowRadius: size(4),
			shadowOpacity: size(1)
		},
		bottomSectionlist: {
			marginBottom: size(50)
		}
	},
	/**
	 * incidentsFiltersScreenMetrics
	 */
	incidentsFiltersScreenMetrics: {
		cancelFilterButton: {
			marginLeft: size(9)
		},
		androidFilterConfirmIconButton: {
			marginRight: size(21)
		},
		androidFilterConfirmIconImage: {
			width: size(23),
			height: size(23)
		},
		applyFilterButton: {
			marginRight: size(9)
		},
		searchPlacesInputWrapper: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			width: pw(93)
		},
		searchSection: {
			paddingBottom: size(11),
			paddingTop: size(3),
			marginBottom: size(4),
			marginRight: size(9),
			marginLeft: size(9)
		},
		placeItemContainer: {
			borderRadius: size(2),
			shadowRadius: size(4),
			shadowOpacity: size(1),
			paddingTop: size(8),
			paddingBottom: size(7),
			paddingLeft: size(10),
			paddingRight: size(10),
			marginBottom: size(6),
			marginTop: size(6),
			marginRight: size(10),
			marginLeft: size(10)
		},
		placeItemImage: {
			borderRadius: size(2),
			width: size(100),
			height: size(85),
			marginRight: size(8)
		},
		blankStatePlacesContainer: {
			marginRight: size(24),
			marginLeft: size(24)
		},
		blankStateButton: {
			height: size(40),
			width: pw(68.8),
			borderRadius: size(20),
			marginBottom: size(100)
		},
		blankStatePlacesImage: {
			height: size(88),
			width: size(88)
		},
		blankStatePlacesTextContainer: {
			paddingBottom: size(21),
			paddingTop: size(21)
		},
		filterList: {
			marginLeft: size(20)
		},
		filterListItem: {
			paddingTop: size(10),
			paddingBottom: size(10)
		},
		marginBetweenCards: {
			marginTop: size(5)
		}
	},
	/**
	 * incidentsDetailScreenMetrics
	 */
	incidentsDetailScreenMetrics: {
		androidFilterConfirmIconButton: {
			marginRight: size(21)
		},
		androidFilterConfirmIconImage: {
			width: size(23),
			height: size(23)
		},
		container: {
			marginBottom: size(10)
		},
		marginBetweenRows: {
			marginTop: size(10)
		},
		wrapperMap: {
			marginTop: size(8),
			width: pw(88),
			height: size(130)
		},
		mapStyle: {
			width: pw(88),
			height: size(130)
		},
		removeMargin: {
			marginBottom: 0,
			marginTop: 0
		},
		wrapperHeaderTitle: {
			width: pw(40)
		},
		wrapperCarousel: {
			// marginTop: size(5)
		}
	},
	/**
cardItemComponentMetrics
*/
	cardItemComponentMetrics: {
		cardItemsListSectionTitle: {
			marginTop: size(5),
			marginBottom: size(12),
			marginLeft: size(20),
			marginRight: size(20)
		},
		cardItemArrowRight: {
			width: size(10),
			height: size(10)
		},
		cardItemTitle: {
			marginTop: size(19),
			marginBottom: size(5),
			marginLeft: size(20),
			marginRight: size(20)
		},
		filterList: {
			marginLeft: size(20)
		},
		filterListItem: {
			paddingTop: size(10),
			paddingBottom: size(10)
		},
		iconSelected: {
			width: size(15),
			height: size(11)
		},
		wrapperIconSelected: {
			marginRight: size(14)
		},
		inputDateStyle: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			width: pw(40)
		},
		inputTimeStyle: {
			borderRadius: size(22),
			paddingTop: size(10),
			paddingBottom: size(9),
			paddingLeft: size(19),
			paddingRight: size(19),
			marginTop: size(8),
			marginLeft: size(10),
			width: pw(30)
		},
		searchSection: {
			paddingBottom: size(11),
			paddingTop: size(3),
			marginBottom: size(4),
			marginRight: size(9),
			marginLeft: size(9)
		},
		sectionTitle: {
			marginTop: size(16),
			marginBottom: size(5),
			marginRight: size(20)
		}
	},
	/**
buttonComponentMetrics
*/
	buttonComponentMetrics: {
		containerButton: {
			width: pw(100),
			marginBottom: size(14)
		},
		buttonStyle: {
			height: size(40),
			width: pw(90),
			borderRadius: size(20)
		}
	},
	/**
	flashcardComponentMetrics
	*/
	flashcardComponentMetrics: {
		questionsContainer: {
			...Platform.select({
				ios: {
					marginBottom: DeviceInfo.hasNotch() ? size(20) : size(0)
				},
				android: {
					marginBottom: size(0)
				}
			})
		}
	},
	/**
	createAccountScreenMetrics
	*/
	createAccountScreenMetrics: {
		wrapperButton: {
			...Platform.select({
				ios: {
					marginBottom: DeviceInfo.hasNotch() ? size(40) : size(20)
				},
				android: {
					marginBottom: size(20)
				}
			}),
			marginRight: 20
		}
	}
};

export default metrics;
