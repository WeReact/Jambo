import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../Themes';
import InputField from '../Components/Custom/form/InputField';
import Notification from '../Components/Custom/Notification';
import Loader from '../Components/Custom/Loader';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import RoundedButton from '../Components/Custom/buttons/RoundedButton';
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
			hasProfession: {},
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
						showCheckmark={false}
						inputType={'text'}
					/>
				);
			} else {
				return (
					<View style={{ marginBottom: 20 }}>
						<Text style={styles.privacyOptionTitle}>
							{'Estudante ou Formado?'}
						</Text>
						{!isFormed && (
							<View style={{ flexDirection: 'row' }}>
								<View>
									<Text style={styles.privacyOptionDescription}>
										{'Estudante'}
									</Text>
								</View>
								<TouchableOpacity
									onPress={() =>
										setTimeout(() => {
											this.setState({
												isFormed: false,
												isStudent: true
											});
										}, 500)
									}
									style={styles.privacyOptionItem}
									underlayColor={Colors.gray01}
								>
									<View style={styles.privacyRadioInput}>
										<RadioInput
											backgroundColor={Colors.white}
											borderColor={Colors.orangeAccent}
											selectedBackgroundColor={Colors.orangeAccent}
											selectedBorderColor={Colors.white}
											iconColor={Colors.white}
											selected={isStudent}
										/>
									</View>
								</TouchableOpacity>
							</View>
						)}
						{!isStudent && (
							<View style={{ flexDirection: 'row' }}>
								<View>
									<Text style={styles.privacyOptionDescription}>
										{'Formado'}
									</Text>
								</View>
								<TouchableOpacity
									onPress={() =>
										setTimeout(() => {
											this.setState({
												isFormed: true,
												isStudent: false
											});
										}, 500)
									}
									style={styles.privacyOptionItem}
									underlayColor={Colors.gray01}
								>
									<View style={styles.privacyRadioInput}>
										<RadioInput
											backgroundColor={Colors.white}
											borderColor={Colors.orangeAccent}
											selectedBackgroundColor={Colors.orangeAccent}
											selectedBorderColor={Colors.white}
											iconColor={Colors.white}
											selected={isFormed}
										/>
									</View>
								</TouchableOpacity>
							</View>
						)}
					</View>
				);
			}
		} else {
			return (
				<View style={{ marginBottom: 20 }}>
					<Text style={styles.privacyOptionTitle}>{'Você Trabalha?'}</Text>
					<View style={{ flexDirection: 'row' }}>
						<View>
							<Text style={styles.privacyOptionDescription}>{'Sim'}</Text>
						</View>
						<TouchableOpacity
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
									backgroundColor={Colors.white}
									borderColor={Colors.orangeAccent}
									selectedBackgroundColor={Colors.orangeAccent}
									selectedBorderColor={Colors.white}
									iconColor={Colors.white}
									selected={hasProfession === true ? true : false}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<View>
							<Text style={styles.privacyOptionDescription}>{'Não'}</Text>
						</View>
						<TouchableOpacity
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
									backgroundColor={Colors.white}
									borderColor={Colors.orangeAccent}
									selectedBackgroundColor={Colors.orangeAccent}
									selectedBorderColor={Colors.white}
									iconColor={Colors.white}
									selected={hasProfession === false ? true : false}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	};

	_render = () => {
		const {
			formValid,
			loadingVisible,
			validEmail,
			validPassword,
			name,
			birth,
			city,
			cityState,
			phone,
			emailAddress,
			password,
			profession,
			isFormed,
			isStudent
		} = this.state;
		const showNotification = !formValid;
		const background = formValid ? Colors.orangeAccent : Colors.darkOrange;
		const notificationMarginTop = showNotification ? 10 : 0;
		const doubleCheck =
			!name ||
			// !birth ||
			!city ||
			!cityState ||
			!phone ||
			!emailAddress ||
			!password
				? true
				: false;
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
							returnKeyType={'done'}
							inputType={'text'}
							showCheckmark={false}
						/>
						{this._handleProfession()}
						<InputField
							labelText="Data de nascimento"
							placeholder={'DD/MM/YYYY'}
							placeholderTextColor={Colors.white}
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
							maxLength={10}
							returnKeyType={'done'}
							autoCapitalize={'none'}
							keyboardType={'number-pad'}
							inputType={'date'}
							showCheckmark={false}
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
							inputType={'text'}
							showCheckmark={false}
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
							inputType={'text'}
							showCheckmark={false}
						/>
						<InputField
							labelText="Telefone *"
							placeholder={'(81) 9 8888-8888'}
							placeholderTextColor={Colors.white}
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
							maxLength={16}
							returnKeyType={'done'}
							autoCapitalize={'none'}
							keyboardType={'phone-pad'}
							inputType={'phone'}
							showCheckmark={false}
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
							keyboardType={'email-address'}
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
					<View style={styles.wrapperButton}>
						<View style={styles.createButton}>
							<RoundedButton
								text="Cadastrar"
								textColor={Colors.orangeAccent}
								textAlign="left"
								background={Colors.white}
								borderColor={Colors.orangeAccent}
								iconPosition="left"
								disabled={doubleCheck}
								icon={
									<View style={styles.buttonIcon}>
										<Icon
											name="angle-right"
											color={Colors.orangeAccent}
											size={32}
											style={styles.icon}
										/>
									</View>
								}
								handleOnPress={this.handleCreateList}
							/>
						</View>
					</View>
				</KeyboardAwareScrollView>
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

export default CreateAccountScreen;
