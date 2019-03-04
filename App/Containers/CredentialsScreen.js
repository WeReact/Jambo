import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Navigation } from '../Themes';
import InputField from '../Components/Custom/form/InputField';
import NextArrowButton from '../Components/Custom/buttons/NextArrowButton';
import Notification from '../Components/Custom/Notification';
import Loader from '../Components/Custom/Loader';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import styles from './Styles/CredentialsScreenStyles';

class CredentialsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);
		this.state = {
			formValid: true,
			validEmail: false,
			emailAddress: '',
			password: '',
			validPassword: false,
			loadingVisible: false
		};
	}

	handleNextButton = () => {
		this.setState({ loadingVisible: true });
		const { emailAddress, password } = this.state;
		const { navigation } = this.props;
		const { navigate } = navigation;
		let email = 'sam@mail.com';
		let pass = '12345';
		const doubleCheck =
			emailAddress === email && password === pass ? true : false;
		setTimeout(() => {
			if (doubleCheck) {
				this.setState({ formValid: true, loadingVisible: false });
				navigate('CourseScreenTab');
			} else {
				this.setState({ formValid: false, loadingVisible: false });
			}
		}, 2000);
	};

	handleCloseNotification = () => {
		this.setState({ formValid: true });
	};

	handleEmailChange = email => {
		// eslint-disable-next-line
		const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { validEmail } = this.state;
		this.setState({ emailAddress: email });

		if (!validEmail) {
			if (emailCheckRegex.test(email)) {
				this.setState({ validEmail: true });
			}
		} else if (!emailCheckRegex.test(email)) {
			this.setState({ validEmail: false });
		}
	};

	handlePasswordChange = password => {
		this.setState({ password });

		if (password.length > 4) {
			// Password has to be at least 4 characters long
			this.setState({ validPassword: true });
		} else {
			this.setState({ validPassword: false });
		}
	};

	toggleNextButtonState = () => {
		const { validEmail, validPassword } = this.state;
		if (validEmail && validPassword) {
			return false;
		}
		return true;
	};

	_renderHeader = () => {
		const { navigation } = this.props;
		return (
			<View
				style={{
					flexDirection: 'row',
					flex: 1,
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 40
				}}
			>
				<View>
					<NavBarButton
						handleButtonPress={() => navigation.goBack()}
						location="left"
						icon={<Icon name="angle-left" color={Colors.white} size={30} />}
					/>
				</View>

				{/*
					<View>
						<NavBarButton
							handleButtonPress={() => navigation.navigate('ForgotPassword')}
							location="right"
							color={Colors.white}
							text="Esqueci Senha"
						/>
					</View>
				*/}
			</View>
		);
	};

	_render = () => {
		const { formValid, loadingVisible, validEmail, validPassword } = this.state;
		const showNotification = !formValid;
		const background = formValid ? Colors.orangeAccent : Colors.darkOrange;
		const notificationMarginTop = showNotification ? 10 : 0;
		return (
			<View style={[{ backgroundColor: background }, styles.wrapper]}>
				<KeyboardAwareScrollView style={styles.scrollView}>
					{this._renderHeader()}
					<View style={{ paddingLeft: 30, paddingRight: 30 }}>
						<Text style={styles.loginHeader}>{'Entrar'}</Text>
						<InputField
							labelText="Email"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							inputType="email"
							customStyle={{ marginBottom: 30 }}
							onChangeText={this.handleEmailChange}
							showCheckmark={validEmail}
							autoFocus
							keyboardType={'email-address'}
							returnKeyType={'done'}
							autoComplete={'email'}
							autoCapitalize={'none'}
						/>
						<InputField
							labelText="Senha"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							inputType="password"
							customStyle={{ marginBottom: 30 }}
							onChangeText={value => this.handlePasswordChange(value)}
							onChangeText={this.handlePasswordChange}
							showCheckmark={validPassword}
							returnKeyType={'done'}
							underlineColorAndroid={'transparent'}
							autoCapitalize={'none'}
							autoCorrect={false}
							autoComplete={'password'}
							autoCapitalize={'none'}
						/>
					</View>
				</KeyboardAwareScrollView>
				<NextArrowButton
					handleNextButton={this.handleNextButton}
					disabled={this.toggleNextButtonState()}
				/>
				<Loader modalVisible={loadingVisible} animationType="fade" />
				<View
					style={[
						styles.notificationWrapper,
						{ marginTop: notificationMarginTop }
					]}
				>
					<Notification
						showNotification={showNotification}
						handleCloseNotification={this.handleCloseNotification}
						type="Ops!"
						firstLine="Email ou Senha inválidos"
					/>
				</View>
			</View>
		);
	};

	render() {
		return this._render();
	}
}

export default CredentialsScreen;
