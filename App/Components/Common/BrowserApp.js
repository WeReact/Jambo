import React, { Component } from 'react';
import {
	Image,
	View,
	TouchableOpacity,
	WebView,
	Modal,
	ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';

//themes
import { Images, Colors } from '../../Themes';

//styles
import styles from './Styles/BrowserAppStyles';

class BrowserApp extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	_renderActivityIndicatorLoadingView() {
		return (
			<ActivityIndicator
				color={Colors.orangeAccent}
				size={'large'}
				style={styles.ActivityIndicatorStyle}
			/>
		);
	}

	_renderNavigationBar = () => {
		const { onPressOutside } = this.props;

		return (
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.headerLeft}
					onPress={() => onPressOutside()}
				>
					<Image
						source={Images.iconClose}
						style={styles.iconChevronLeft}
						resizeMode={'contain'}
					/>
				</TouchableOpacity>
				<View style={styles.headerCenter}>
					<Image
						source={Images.newJambo}
						style={styles.iconLogoWebView}
						resizeMode={'contain'}
					/>
				</View>
				<View style={styles.headerRight} />
				{/*
				<TouchableOpacity
					style={styles.headerRight}
					onPress={() => this.handleShare()}
				>
					<Image
						source={Images.iconShareWebView}
						style={styles.iconShareWebView}
						resizeMode={'contain'}
					/>
                </TouchableOpacity>
                */}
			</View>
		);
	};
	render() {
		const { open, onPressOutside, webViewUrl } = this.props;
		const {} = this.state;

		return (
			<Modal
				visible={open}
				animationType={'slide'}
				onRequestClose={() => onPressOutside()}
			>
				<View style={styles.modalBrowser}>
					{this._renderNavigationBar()}
					<View />
					<WebView
						source={{ uri: webViewUrl ? webViewUrl : null }}
						renderLoading={() => this._renderActivityIndicatorLoadingView()}
						javaScriptEnabled={true}
						domStorageEnabled={true}
						startInLoadingState={true}
					/>
				</View>
			</Modal>
		);
	}
}

BrowserApp.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	open: false,
	onPressOutside: () => {},
	webViewUrl: ''
};

BrowserApp.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	open: PropTypes.bool,
	onPressOutside: PropTypes.func,
	webViewUrl: PropTypes.string
};

export default BrowserApp;
