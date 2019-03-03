import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Navigation } from '../Themes';
import InputField from '../Components/Custom/form/InputField';
import Notification from '../Components/Custom/Notification';
import NextArrowButton from '../Components/Custom/buttons/NextArrowButton';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import Loader from '../Components/Custom/Loader';
import styles from './Styles/ForgotPassword';

export default class ForgotPassword extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<NavBarButton
				handleButtonPress={() => navigation.goBack()}
				location="left"
				icon={<Icon name="angle-left" color={Colors.white} size={30} />}
			/>
		),
		headerStyle: Navigation,
		headerTransparent: true,
		headerTintColor: Colors.white
	});

	constructor(props) {
		super(props);
		this.state = {
			formValid: true,
			loadingVisible: false,
			validEmail: false,
			emailAddress: ''
		};
		// this.handleEmailChange = this.handleEmailChange.bind(this);
		// this.goToNextStep = this.goToNextStep.bind(this);
		// this.handleCloseNotification = this.handleCloseNotification.bind(this);
	}

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

	goToNextStep = () => {
		const { emailAddress } = this.state;
		this.setState({ loadingVisible: true });
		setTimeout(() => {
			if (emailAddress === 'wrong@email.com') {
				this.setState({
					loadingVisible: false,
					formValid: false
				});
			} else {
				this.setState({
					loadingVisible: false,
					formValid: true
				});
			}
		}, 2000);
	};

	handleCloseNotification = () => {
		this.setState({ formValid: true });
	};

	render() {
		const { loadingVisible, formValid, validEmail } = this.state;
		const background = formValid ? Colors.green01 : Colors.darkOrange;
		const showNotification = !formValid;
		return (
			<KeyboardAvoidingView
				style={[{ backgroundColor: background }, styles.wrapper]}
				behavior="padding"
			>
				<View style={styles.scrollViewWrapper}>
					<ScrollView style={styles.scrollView}>
						<Text style={styles.forgotPasswordHeading}>
							Forgot your password?
						</Text>
						<Text style={styles.forgotPasswordSubheading}>
							Enter your email to find your account
						</Text>
						<InputField
							customStyle={{ marginBottom: 30 }}
							textColor={Colors.white}
							labelText="EMAIL ADDRESS"
							labelTextSize={14}
							labelColor={Colors.white}
							borderBottomColor={Colors.white}
							inputType="email"
							onChangeText={this.handleEmailChange}
							showCheckmark={validEmail}
						/>
					</ScrollView>
					<NextArrowButton
						handleNextButton={this.goToNextStep}
						disabled={!validEmail}
					/>
				</View>
				<Loader modalVisible={loadingVisible} animationType="fade" />
				<View style={styles.notificationWrapper}>
					<Notification
						showNotification={showNotification}
						handleCloseNotification={this.handleCloseNotification}
						type="Error"
						firstLine="No account exists for the requested"
						secondLine="email address."
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
