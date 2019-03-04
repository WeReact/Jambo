import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	Animated,
	Easing
} from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

// Styles
import styles from './Styles/ResultScreenStyles';

class ResultScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			scaleCheckmarkValue: new Animated.Value(0),
			showCheckmark: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ showCheckmark: true });
		}, 500);
	}

	scaleCheckmark(value) {
		Animated.timing(this.state.scaleCheckmarkValue, {
			toValue: value,
			duration: 400,
			easing: Easing.easeOutBack
		}).start();
	}

	_handleResult = () => {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { note, approved } = params;
		if (approved) {
			return this._renderResultOk(note);
		} else {
			return this._renderResultNok(note);
		}
	};

	_renderResultOk = note => {
		const { scaleCheckmarkValue, showCheckmark } = this.state;
		const iconScale = scaleCheckmarkValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0.01, 1.6, 1]
		});

		const scaleValue = showCheckmark ? 1 : 0;
		this.scaleCheckmark(scaleValue);
		const lessonNote = note;
		return (
			<View style={styles.wrapperInfo}>
				<Animated.View style={[{ transform: [{ scale: iconScale }] }]}>
					<Image
						style={{ width: 80, height: 160 }}
						source={Images.cool}
						resizeMode={'contain'}
					/>
				</Animated.View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 28,
							color: Colors.orangeAccent,
							textAlign: 'center'
						}}
					>
						{'Parabéns !'}
					</Text>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 28,
							color: Colors.orangeAccent,
							textAlign: 'center'
						}}
					>
						{'Você passou nesse curso com nota ' + lessonNote + '!'}
					</Text>
					<Animated.View style={[{ transform: [{ scale: iconScale }] }]}>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: 'row',
								marginTop: 10
							}}
						>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.clap}
								resizeMode={'contain'}
							/>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.clap}
								resizeMode={'contain'}
							/>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.clap}
								resizeMode={'contain'}
							/>
						</View>
					</Animated.View>
				</View>
			</View>
		);
	};

	_renderResultNok = note => {
		const { scaleCheckmarkValue, showCheckmark } = this.state;
		const iconScale = scaleCheckmarkValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0.01, 1.6, 1]
		});

		const scaleValue = showCheckmark ? 1 : 0;
		this.scaleCheckmark(scaleValue);
		const lessonNote = note;
		return (
			<View style={styles.wrapperInfo}>
				<Animated.View style={[{ transform: [{ scale: iconScale }] }]}>
					<Image
						style={{ width: 80, height: 160 }}
						source={Images.crying}
						resizeMode={'contain'}
					/>
				</Animated.View>
				<View style={{ alignItems: 'center', justifyContent: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 28,
							color: Colors.orangeAccent,
							textAlign: 'center'
						}}
					>
						{'Infelizmente,\n você não passou nesse curso, \n sua nota foi ' +
							lessonNote +
							'.'}
					</Text>
					<Animated.View style={[{ transform: [{ scale: iconScale }] }]}>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: 'row',
								marginTop: 10
							}}
						>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.smile}
								resizeMode={'contain'}
							/>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.smile}
								resizeMode={'contain'}
							/>
							<Image
								style={{ width: 40, height: 40 }}
								source={Images.smile}
								resizeMode={'contain'}
							/>
						</View>
					</Animated.View>
				</View>
			</View>
		);
	};

	render() {
		const { navigation } = this.props;

		return (
			<ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
				<TouchableOpacity
					style={styles.wrapperHeaderLeft}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Image
						style={styles.iconArrowLeft}
						source={Images.iconClose}
						resizeMode={'contain'}
					/>
				</TouchableOpacity>
				{this._handleResult()}
			</ScrollView>
		);
	}
}

export default ResultScreen;
