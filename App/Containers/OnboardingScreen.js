import React, { Component, Fragment } from 'react';
import {
	Text,
	View,
	Image,
	TouchableHighlight,
	ScrollView,
	Alert,
	SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, Navigation, Images } from '../Themes';
import RoundedButton from '../Components/Custom/buttons/RoundedButton';
import NavBarButton from '../Components/Custom/buttons/NavBarButton';
import styles from './Styles/OnboardingScreenStyles';

export default class LoggedOut extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
		// headerRight: (
		// 	<NavBarButton
		// 		handleButtonPress={() => navigation.navigate('LogIn')}
		// 		location="right"
		// 		color={Colors.white}
		// 		text="Log In"
		// 	/>
		// ),
		// headerStyle: Navigation,
		// headerTransparent: true,
		// headerTintColor: Colors.white
	});

	static onFacebookPress() {
		alert('Facebook button pressed');
	}

	static onCreateAccountPress() {
		alert('Create Account button pressed');
	}

	static onMoreOptionsPress() {
		Alert.alert('More options button pressed');
	}

	render() {
		const { navigation } = this.props;
		const { navigate } = navigation;
		return (
			<Fragment>
				<SafeAreaView
					style={{ flex: 0, backgroundColor: Colors.orangeAccent }}
				/>
				<SafeAreaView style={{ flex: 1, backgroundColor: Colors.orangeAccent }}>
					<ScrollView style={styles.wrapper}>
						<View style={styles.welcomeWrapper}>
							<Image source={Images.newJambo} style={styles.logo} />
							{/*
						<RoundedButton
							text="Continue with Facebook"
							textColor={Colors.green01}
							background={Colors.white}
							icon={
								<Icon
									name="facebook"
									size={20}
									style={styles.facebookButtonIcon}
								/>
							}
							handleOnPress={this.onFacebookPress}
						/>
					 */}
							<RoundedButton
								text="Entrar"
								textColor={Colors.white}
								handleOnPress={() => navigate('LogIn')}
							/>
							<RoundedButton
								text={'Cadastre-se agora!'}
								textColor={Colors.orangeAccent}
								background={Colors.white}
								icon={
									<Icon
										name={'account-plus'}
										size={20}
										style={styles.facebookButtonIcon}
									/>
								}
								handleOnPress={this.onFacebookPress}
							/>
							{/* 
						<TouchableHighlight
							style={styles.moreOptionsButton}
							onPress={this.onMoreOptionsPress}
						>
							<Text style={styles.moreOptionsButtonText}>More options</Text>
						</TouchableHighlight>
					
						<View style={styles.termsAndConditions}>
							<Text style={styles.termsText}>
								By tapping Continue, Create Account or More
							</Text>
							<Text style={styles.termsText}>{' options,'}</Text>
							<Text style={styles.termsText}>{"I agree to Airbnb's "}</Text>
							<TouchableHighlight style={styles.linkButton}>
								<Text style={styles.termsText}>Terms of Service</Text>
							</TouchableHighlight>
							<Text style={styles.termsText}>,</Text>
							<TouchableHighlight style={styles.linkButton}>
								<Text style={styles.termsText}>Payments Terms of Service</Text>
							</TouchableHighlight>
							<Text style={styles.termsText}>,</Text>
							<TouchableHighlight style={styles.linkButton}>
								<Text style={styles.termsText}>Privacy Policy</Text>
							</TouchableHighlight>
							<Text style={styles.termsText}>, and</Text>
							<TouchableHighlight style={styles.linkButton}>
								<Text style={styles.termsText}>Nondiscrimination Policy</Text>
							</TouchableHighlight>
							<Text style={styles.termsText}>.</Text>
						</View>
					*/}
						</View>
					</ScrollView>
				</SafeAreaView>
			</Fragment>
		);
	}
}
