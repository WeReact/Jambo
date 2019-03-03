import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import ActionCreators from '../redux/actions';
import { Colors, Navigation } from '../Themes';
import InputField from '../Components/Custom/form/InputField';
import NextArrowButton from '../Components/Custom/buttons/NextArrowButton';
import Notification from '../Components/Custom/Notification';
import Loader from '../Components/Custom/Loader';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import styles from './Styles/LogIn';

class LogIn extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
		// headerRight: (
		// 	<NavBarButton
		// 		handleButtonPress={() => navigation.navigate('ForgotPassword')}
		// 		location="right"
		// 		color={Colors.white}
		// 		text="Forgot Password"
		// 	/>
		// ),
		// headerLeft: (
		// 	<NavBarButton
		// 		handleButtonPress={() => navigation.goBack()}
		// 		location="left"
		// 		icon={<Icon name="angle-left" color={Colors.white} size={30} />}
		// 	/>
		// ),
		// headerStyle: Navigation,
		// headerTransparent: true,
		// headerTintColor: Colors.white
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

		// this.handleCloseNotification = this.handleCloseNotification.bind(this);
		// this.handleEmailChange = this.handleEmailChange.bind(this);
		// this.handleNextButton = this.handleNextButton.bind(this);
		// this.handlePasswordChange = this.handlePasswordChange.bind(this);
		// this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
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
				navigate('TurnOnNotifications');
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
		const { validPassword } = this.state;

		this.setState({ password });

		if (!validPassword) {
			if (password.length > 4) {
				// Password has to be at least 4 characters long
				this.setState({ validPassword: true });
			}
		} else if (password <= 4) {
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
							returnKeyType={'next'}
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
						type="Error"
						firstLine="Those credentials don't look right."
						secondLine="Please try again."
					/>
				</View>
			</View>
		);
	};

	render() {
		return this._render();
		// const { formValid, loadingVisible, validEmail, validPassword } = this.state;
		// const showNotification = !formValid;
		// const background = formValid ? Colors.orangeAccent : Colors.darkOrange;
		// const notificationMarginTop = showNotification ? 10 : 0;
		// return (
		// 	<KeyboardAvoidingView
		// 		style={[{ backgroundColor: background }, styles.wrapper]}
		// 		behavior="padding"
		// 	>
		// 		<View style={styles.scrollViewWrapper}>
		// 			<ScrollView style={styles.scrollView}>
		// 				<Text style={styles.loginHeader}>Log In</Text>
		// 				<InputField
		// 					labelText="EMAIL ADDRESS"
		// 					labelTextSize={14}
		// 					labelColor={Colors.white}
		// 					textColor={Colors.white}
		// 					borderBottomColor={Colors.white}
		// 					inputType="email"
		// 					customStyle={{ marginBottom: 30 }}
		// 					onChangeText={this.handleEmailChange}
		// 					showCheckmark={validEmail}
		// 					autoFocus
		// 				/>
		// 				<InputField
		// 					labelText="PASSWORD"
		// 					labelTextSize={14}
		// 					labelColor={Colors.white}
		// 					textColor={Colors.white}
		// 					borderBottomColor={Colors.white}
		// 					inputType="password"
		// 					customStyle={{ marginBottom: 30 }}
		// 					onChangeText={this.handlePasswordChange}
		// 					showCheckmark={validPassword}
		// 				/>
		// 			</ScrollView>
		// 			<NextArrowButton
		// 				handleNextButton={this.handleNextButton}
		// 				disabled={this.toggleNextButtonState()}
		// 			/>
		// 		</View>
		// 		<Loader modalVisible={loadingVisible} animationType="fade" />
		// 		<View
		// 			style={[
		// 				styles.notificationWrapper,
		// 				{ marginTop: notificationMarginTop }
		// 			]}
		// 		>
		// 			<Notification
		// 				showNotification={showNotification}
		// 				handleCloseNotification={this.handleCloseNotification}
		// 				type="Error"
		// 				firstLine="Those credentials don't look right."
		// 				secondLine="Please try again."
		// 			/>
		// 		</View>
		// 	</KeyboardAwareScrollView>
		// );
	}
}

export default LogIn;

// const mapStateToProps = state => ({
//   loggedInStatus: state.loggedInStatus,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

// LogIn.propTypes = {
//   logIn: PropTypes.func.isRequired,
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//     goBack: PropTypes.func,
//   }).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
