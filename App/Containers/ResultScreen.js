import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	Platform
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

		this.state = {};
	}

	componentDidMount() {}

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
		const lessonNote = note;
		return (
			<View style={styles.wrapperInfo}>
				<Image
					style={{ width: 80, height: 160 }}
					source={Images.cool}
					resizeMode={'contain'}
				/>
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
				</View>
			</View>
		);
	};

	_renderResultNok = note => {
		const lessonNote = note;
		return (
			<View style={styles.wrapperInfo}>
				<Image
					style={{ width: 80, height: 160 }}
					source={Images.crying}
					resizeMode={'contain'}
				/>
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
				</View>
			</View>
		);
	};

	render() {
		const { navigation } = this.props;

		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
				<View style={styles.wrapperSectionTitle}>
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
				</View>
				{this._handleResult()}
			</ScrollView>
		);
	}
}

export default ResultScreen;
