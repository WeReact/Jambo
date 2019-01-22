import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes';
import { StatusBarColor, Button } from '../Components/Common';

import { Icon } from '../Components/Common';

import { TextField } from 'react-native-material-textfield';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import styles from './Styles/LoginScreenStyles';

class LoginScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconRadarInactive}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={styles.wrapperTabBarLabel}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? '#3F51B5' : '#404040'
						}
					]}
				>
					{'Launch'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			visible: true
		};
	}

	renderAccessory = field => {
		const { email, password, visible } = this.state;

		if (field === 'password' && password) {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => this.setState({ visible: !visible })}
				>
					<Icon src={visible ? Images.eye : Images.eyeOff} size={'tiny'} />
				</TouchableOpacity>
			);
		} else if (field === 'text' && email) {
			return (
				<TouchableOpacity
					style={styles.inputAccessory}
					onPress={() => {
						this.setState({
							email: ''
						});
					}}
				>
					<Icon src={Images.clear} size={'tiny'} />
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	};

	/**
     * Possible props {ignore the var props value}:
        * <TextField
            value={value}
            autoCorrect={false}
            autoCapitalize={'none'}
            onChangeText={value => this.handleChangeText(value)}
            label={label}
            onBlur={() => this.handleOnBlur()}
            keyboardType={keyboardType}
            multiline={multiline}
            editable={editable}
            error={error}
            tintColor={tintColor}
            textColor={textColor}
            baseColor={baseColor}
            disabledLineWidth={disabledLine ? 0 : 1}
            activeLineWidth={disabledLine ? 0 : 1}
            lineWidth={disabledLine ? 0 : 1}
            labelTextStyle={labelTextStyle}
            titleTextStyle={titleTextStyle}
            affixTextStyle={affixTextStyle}
            fontSize={fontSize}
            titleFontSize={titleFontSize}
            labelFontSize={labelFontSize}
            secureTextEntry={visible ? false : secureTextEntry}
            renderAccessory={() => this.renderAccessory(secureTextEntry)}
            returnKeyType={returnKeyType}
            enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
            onSubmitEditing={onSubmitEditing}
            characterRestriction={characterRestriction}
            containerStyle={containerStyle}
            disabled={isDisabled}
        />
     * @memberof InputScreen
     */
	_renderInput = () => {
		const { email, password, visible } = this.state;
		const { navigation } = this.props;
		return (
			<KeyboardAwareScrollView>
				<View style={styles.keyboard}>
					<View style={styles.containerKeyboard}>
						<View style={styles.keybordForm}>
							<View style={styles.keyboardGroup}>
								<Image
									source={Images.iconLeading}
									style={styles.icon}
									resizeMode={'contain'}
								/>
								<TextField
									label={'Email'}
									value={email}
									onChangeText={email => this.setState({ email })}
									containerStyle={styles.input}
									tintColor={'rgb(227, 109, 13)'}
									renderAccessory={() => this.renderAccessory('text')}
								/>
							</View>

							<View style={[styles.keyboardGroup, styles.keyboardLast]}>
								<Image
									source={Images.iconLock}
									style={styles.icon}
									resizeMode={'contain'}
								/>
								<TextField
									label={'Password'}
									value={password}
									onChangeText={password => this.setState({ password })}
									secureTextEntry={visible}
									tintColor={'rgb(227, 109, 13)'}
									renderAccessory={() => this.renderAccessory('password')}
									containerStyle={styles.input}
								/>
							</View>

							<View style={styles.keyboardAction}>
								<Button
									labelButton={'Entrar'}
									buttonStyle={styles.actionButtonStyle}
									onPress={() => navigation.navigate('CourseScreenTab')}
								/>
							</View>

							<View style={styles.signupStyle}>
								<Text style={styles.signupTextStyle}>
									{'Ainda não é cadastrado?'}
								</Text>
								<TouchableOpacity onPress={() => {}}>
									<Text
										style={[styles.signupStyle, { color: Colors.orangeAccent }]}
									>
										{' Cadastra-se agora.'}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</KeyboardAwareScrollView>
		);
	};

	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.newJambo} style={styles.logo} />
					</View>
					<View style={styles.customSection}>{this._renderInput()}</View>
				</ScrollView>
			</View>
		);
	}
}

export default LoginScreen;
