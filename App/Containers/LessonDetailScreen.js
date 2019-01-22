import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes';
import { BrowserApp } from '../Components/Common';

// Styles
import styles from './Styles/LessonDetailStyles';

class LessonDetailScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			openWebview: false,
			webViewUrl: ''
		};
	}

	componentDidMount() {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { videoLink } = params;

		this.setState({
			webViewUrl: videoLink ? videoLink : 'https://www.google.com'
		});
	}

	/**
	 * Handle to setState on openWebview state (to open the webview).
	 * @author samuelmataraso
	 * @method _handleOpenWebview
	 * @param none
	 * @return state
	 */
	_handleOpenWebview = () => {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { videoLink } = params;
		this.setState({
			openWebview: true,
			webViewUrl: videoLink ? videoLink : 'https://www.google.com'
		});
	};

	/**
	 * Handle to setState on openWebview state (to close the webview).
	 * @author samuelmataraso
	 * @method _handleCloseWebview
	 * @param none
	 * @return {state} state
	 */
	_handleCloseWebview = () => {
		this.setState({ openWebview: false, webViewUrl: '' });
	};

	render() {
		const { openWebview, webViewUrl } = this.state;
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { title, description } = params;
		const lessonTitle = title;
		const lessonDescription = description;
		return (
			<ScrollView style={{ flex: 1, marginBottom: 10 }}>
				<Image
					source={Images.lessonDetail}
					style={styles.containerBackground}
					resizeMode={'stretch'}
				/>
				<View style={styles.buttonAbsolute}>
					<TouchableOpacity
						style={styles.wrapperHeaderLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							style={styles.iconArrowLeft}
							source={Images.iconArrowLeftWhite}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.wrapperSectionTitle}>
					<View>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.sectionTitleStyle}
						>
							{lessonTitle}
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.subTitleStyle}
						>
							{'descrição'.toUpperCase()}
						</Text>
					</View>
					<View style={{ marginTop: 10 }}>
						<Text
							numberOfLines={10}
							ellipsizeMode={'tail'}
							style={styles.descriptionStyle}
						>
							{lessonDescription}
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.subTitleStyle}
						>
							{'Video'.toUpperCase()}
						</Text>
					</View>
					<View style={styles.contentYoutube}>
						<TouchableOpacity
							style={styles.wrapperYoutube}
							onPress={() => this._handleOpenWebview()}
						>
							<Image
								style={styles.iconYoutube}
								source={Images.logoYoutube}
								resizeMode={'contain'}
							/>
						</TouchableOpacity>
					</View>
				</View>
				{
					<BrowserApp
						open={openWebview}
						onPressOutside={() => {
							this._handleCloseWebview();
						}}
						webViewUrl={webViewUrl}
					/>
				}
			</ScrollView>
		);
	}
}

export default LessonDetailScreen;
