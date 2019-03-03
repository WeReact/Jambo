import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableHighlight } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors, Navigation } from '../Themes';
import InputField from '../Components/Custom/form/InputField';
import NextArrowButton from '../Components/Custom/buttons/NextArrowButton';
import Notification from '../Components/Custom/Notification';
import Loader from '../Components/Custom/Loader';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import RadioInput from '../Components/Custom/form/RadioInput';
import styles from './Styles/CreateAccountScreenStyles';

class CreateAccountScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);
		this.state = {
			formValid: true,
			validEmail: false,
			name: '',
			profession: '',
			emailAddress: '',
			password: '',
			birth: '',
			city: '',
			cityState: '',
			phone: '',
			validPassword: false,
			loadingVisible: false,
			hasProfession: false,
			hideRadioInput: false,
			isFormed: false,
			isStudent: false
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

	_handleProfession = () => {
		const { hideRadioInput, hasProfession, isStudent, isFormed } = this.state;
		if (hideRadioInput) {
			if (hasProfession) {
				return (
					<InputField
						labelText="Profissão"
						labelTextSize={14}
						labelColor={Colors.white}
						textColor={Colors.white}
						borderBottomColor={Colors.white}
						customStyle={{ marginBottom: 30 }}
						onChangeText={value =>
							this.setState({
								profession: value
							})
						}
						returnKeyType={'done'}
					/>
				);
			} else {
				return (
					<View>
						<Text style={styles.privacyOptionTitle}>
							{'Estudante ou Formado?'}
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<View>
								<Text style={styles.privacyOptionDescription}>
									{'Estudante'}
								</Text>
							</View>
							<TouchableHighlight
								onPress={() =>
									this.setState({
										isFormed: false,
										isStudent: true
									})
								}
								style={styles.privacyOptionItem}
								underlayColor={Colors.gray01}
							>
								<View style={styles.privacyRadioInput}>
									<RadioInput
										backgroundColor={Colors.gray07}
										borderColor={Colors.gray05}
										selectedBackgroundColor={Colors.green01}
										selectedBorderColor={Colors.green01}
										iconColor={Colors.white}
										selected={isStudent}
									/>
								</View>
							</TouchableHighlight>
						</View>
						<View style={styles.divider} />
						<View style={{ flexDirection: 'row' }}>
							<View>
								<Text style={styles.privacyOptionDescription}>{'Formado'}</Text>
							</View>
							<TouchableHighlight
								onPress={() =>
									this.setState({
										isFormed: true,
										isStudent: false
									})
								}
								style={styles.privacyOptionItem}
								underlayColor={Colors.gray01}
							>
								<View style={styles.privacyRadioInput}>
									<RadioInput
										backgroundColor={Colors.gray07}
										borderColor={Colors.gray05}
										selectedBackgroundColor={Colors.green01}
										selectedBorderColor={Colors.green01}
										iconColor={Colors.white}
										selected={isFormed}
									/>
								</View>
							</TouchableHighlight>
						</View>
					</View>
				);
			}
		} else {
			return (
				<View>
					<Text style={styles.privacyOptionTitle}>{'Você Trabalha?'}</Text>
					<View style={{ flexDirection: 'row' }}>
						<View>
							<Text style={styles.privacyOptionDescription}>{'Sim'}</Text>
						</View>
						<TouchableHighlight
							onPress={() =>
								this.setState({
									hideRadioInput: true,
									hasProfession: true
								})
							}
							style={styles.privacyOptionItem}
							underlayColor={Colors.gray01}
						>
							<View style={styles.privacyRadioInput}>
								<RadioInput
									backgroundColor={Colors.gray07}
									borderColor={Colors.gray05}
									selectedBackgroundColor={Colors.green01}
									selectedBorderColor={Colors.green01}
									iconColor={Colors.white}
									selected={hasProfession}
								/>
							</View>
						</TouchableHighlight>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<View>
							<Text style={styles.privacyOptionDescription}>{'Não'}</Text>
						</View>
						<TouchableHighlight
							onPress={() =>
								this.setState({
									hideRadioInput: true,
									hasProfession: false
								})
							}
							style={styles.privacyOptionItem}
							underlayColor={Colors.gray01}
						>
							<View style={styles.privacyRadioInput}>
								<RadioInput
									backgroundColor={Colors.gray07}
									borderColor={Colors.gray05}
									selectedBackgroundColor={Colors.green01}
									selectedBorderColor={Colors.green01}
									iconColor={Colors.white}
									selected={!hasProfession}
								/>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			);
		}
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
						<Text style={styles.loginHeader}>{'Cadastro'}</Text>
						<InputField
							labelText="Nome *"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							customStyle={{ marginBottom: 30 }}
							onChangeText={value =>
								this.setState({
									name: value
								})
							}
							autoFocus
							returnKeyType={'done'}
						/>
						{this._handleProfession()}
						<InputField
							labelText="Data de nascimento"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							customStyle={{ marginBottom: 30 }}
							onChangeText={value =>
								this.setState({
									birth: value
								})
							}
							returnKeyType={'done'}
							autoCapitalize={'none'}
							keyboardType={'number-pad'}
						/>
						<InputField
							labelText="Cidade *"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							customStyle={{ marginBottom: 30 }}
							onChangeText={value =>
								this.setState({
									city: value
								})
							}
							returnKeyType={'done'}
						/>
						<InputField
							labelText="Estado *"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							customStyle={{ marginBottom: 30 }}
							onChangeText={value =>
								this.setState({
									cityState: value
								})
							}
							returnKeyType={'done'}
						/>
						<InputField
							labelText="Telefone *"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							customStyle={{ marginBottom: 30 }}
							onChangeText={value =>
								this.setState({
									phone: value
								})
							}
							returnKeyType={'done'}
							autoCapitalize={'none'}
							keyboardType={'number-pad'}
						/>
						<InputField
							labelText="Email *"
							labelTextSize={14}
							labelColor={Colors.white}
							textColor={Colors.white}
							borderBottomColor={Colors.white}
							inputType="email"
							customStyle={{ marginBottom: 30 }}
							onChangeText={this.handleEmailChange}
							showCheckmark={validEmail}
							returnKeyType={'next'}
							autoComplete={'email'}
							autoCapitalize={'none'}
						/>
						<InputField
							labelText="Senha *"
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
		// 				<Text style={styles.CreateAccountScreenHeader}>Log In</Text>
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

export default CreateAccountScreen;

// const mapStateToProps = state => ({
//   loggedInStatus: state.loggedInStatus,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

// CreateAccountScreen.propTypes = {
//   CreateAccountScreen: PropTypes.func.isRequired,
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//     goBack: PropTypes.func,
//   }).isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountScreen);
