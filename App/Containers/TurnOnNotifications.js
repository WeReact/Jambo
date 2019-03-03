import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { View, Text, TouchableHighlight } from 'react-native';
import { Colors, Navigation } from '../Themes';
import styles from './Styles/TurnOnNotifications';

const navigateToTabsAction = NavigationActions.navigate({
	routeName: 'LoggedIn'
});

export default class TurnOnNotifications extends Component {
	static navigationOptions = () => ({
		header: null
		// headerLeft: null,
		// headerStyle: Navigation,
		// headerTransparent: true,
		// gesturesEnabled: false
	});

	constructor(props) {
		super(props);

		this.state = {
			pressNotifyBtn: false,
			pressSkipBtn: false
		};

		// this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(
		// 	this
		// );
		// this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(
		// 	this
		// );
		// this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
		// this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
	}

	handleNotifyBtnHideUnderlay = () => {
		this.setState({ pressNotifyBtn: false });
	};

	handleNotifyBtnShowUnderlay = () => {
		this.setState({ pressNotifyBtn: true });
	};

	handleSkipBtnHideUnderlay = () => {
		this.setState({ pressSkipBtn: false });
	};

	handleSkipBtnShowUnderlay = () => {
		this.setState({ pressSkipBtn: true });
	};

	render() {
		const { pressNotifyBtn, pressSkipBtn } = this.state;
		const { navigation } = this.props;
		const { navigate } = navigation;
		const notifyBtnColor = pressNotifyBtn
			? Colors.orangeAccent
			: Colors.orangeAccent;
		return (
			<View style={styles.wrapper}>
				<View style={styles.content}>
					<Icon name="comments-o" size={46} style={styles.icon} />
					<Text style={styles.title}>{'Ativar as notificações?'}</Text>
					<Text style={styles.description}>
						{'Podemos te notificar sobre algo importante.'}
					</Text>
					<TouchableHighlight
						style={[{ backgroundColor: notifyBtnColor }, styles.notifyButton]}
						onPress={() => navigate('CourseScreenTab')}
						onShowUnderlay={this.handleNotifyBtnShowUnderlay}
						onHideUnderlay={this.handleNotifyBtnHideUnderlay}
						underlayColor={Colors.orangeAccent}
					>
						<Text style={[{ color: Colors.white }, styles.buttonText]}>
							{'Sim, me avise'}
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={[
							{ backgroundColor: pressSkipBtn ? Colors.gray01 : 'transparent' },
							styles.skipButton
						]}
						onPress={() => navigate('CourseScreenTab')}
						onShowUnderlay={this.handleSkipBtnShowUnderlay}
						onHideUnderlay={this.handleSkipBtnHideUnderlay}
						underlayColor={Colors.gray01}
					>
						<Text style={[{ color: Colors.orangeAccent }, styles.buttonText]}>
							{'Pular'}
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

TurnOnNotifications.propTypes = {
	navigation: PropTypes.shape({
		dispatch: PropTypes.func
	}).isRequired
};
