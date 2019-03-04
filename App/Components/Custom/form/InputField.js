import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Animated,
	Easing
} from 'react-native';
import { Colors } from '../../../Themes/';

import VMasker from 'vanilla-masker';

export default class InputField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secureInput: !(
				props.inputType === 'text' ||
				props.inputType === 'email' ||
				props.inputType === 'date' ||
				props.inputType === 'phone'
			),
			scaleCheckmarkValue: new Animated.Value(0),
			inputValue: props.defaultValue
		};
		this.toggleShowPassword = this.toggleShowPassword.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
	}

	scaleCheckmark(value) {
		Animated.timing(this.state.scaleCheckmarkValue, {
			toValue: value,
			duration: 400,
			easing: Easing.easeOutBack
		}).start();
	}

	toggleShowPassword() {
		this.setState({ secureInput: !this.state.secureInput });
	}

	onChangeText(text) {
		this.props.onChangeText(text);
		this.setState({ inputValue: text });
	}

	/**
	 * handle to choose the Input mask
	 * @author samuelmataraso
	 * @method _handleChooseInputMask
	 * @param {string} selecteditem
	 * @return function
	 */
	_handleChooseInputMask = (value, maskType) => {
		switch (maskType) {
			case 'date':
				return this._handleDateInputMask(value);
				break;
			case 'phone':
				return this._handlePhoneInputMask(value);
				break;
			default:
				return null;
		}
	};

	/**
	 * handle the Date input mask type
	 * @author samuelmataraso
	 * @method _handleDateInputMask
	 * @param {string} value
	 * @param {string} input
	 * @return state
	 */
	_handleDateInputMask = value => {
		let dateInput = value;
		dateInput = VMasker.toPattern(dateInput, '99/99/9999');
		this.props.onChangeText(dateInput);
		this.setState({
			inputValue: dateInput
		});
	};
	/**
	 * handle the Phone input mask type
	 * @author samuelmataraso
	 * @method _handlePhoneInputMask
	 * @param {string} value
	 * @return state
	 */
	_handlePhoneInputMask = value => {
		let phoneInput = value;
		phoneInput = VMasker.toPattern(phoneInput, '(99) 9 9999-9999');
		this.props.onChangeText(phoneInput);
		this.setState({
			inputValue: phoneInput
		});
	};

	render() {
		const {
			labelText,
			labelTextSize,
			labelTextWeight,
			labelColor,
			textColor,
			borderBottomColor,
			inputType,
			customStyle,
			inputStyle,
			onChangeText,
			showCheckmark,
			autoFocus,
			autoCapitalize,
			placeholder,
			defaultValue,
			returnKeyType,
			autoComplete,
			placeholderTextColor,
			keyboardType,
			maxLength
		} = this.props;
		const { secureInput, scaleCheckmarkValue, inputValue } = this.state;
		const fontSize = labelTextSize || 14;
		const fontWeight = labelTextWeight || '700';
		const color = labelColor || Colors.white;
		const inputColor = textColor || Colors.white;
		const borderBottom = borderBottomColor || 'transparent';
		// const keyboardType = inputType === 'email' ? 'email-address' : 'default';
		const customInputStyle = inputStyle || {};
		if (!inputStyle || (inputStyle && !inputStyle.paddingBottom)) {
			customInputStyle.paddingBottom = 5;
		}

		const iconScale = scaleCheckmarkValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [0.01, 1.6, 1]
		});

		const scaleValue = showCheckmark ? 1 : 0;
		this.scaleCheckmark(scaleValue);

		if (inputType === 'date' || inputType === 'phone') {
			return (
				<View style={[customStyle, styles.wrapper]}>
					<Text style={[{ fontWeight, color, fontSize }, styles.label]}>
						{labelText}
					</Text>
					{inputType === 'password' ? (
						<TouchableOpacity
							style={styles.showButton}
							onPress={this.toggleShowPassword}
						>
							<Text style={styles.showButtonText}>
								{secureInput ? 'Mostrar' : 'Esconder'}
							</Text>
						</TouchableOpacity>
					) : null}
					<Animated.View
						style={[
							{ transform: [{ scale: iconScale }] },
							styles.checkmarkWrapper
						]}
					>
						<Icon name="check" color={Colors.white} size={20} />
					</Animated.View>
					<TextInput
						style={[
							{ color: inputColor, borderBottomColor: borderBottom },
							inputStyle,
							styles.inputField
						]}
						secureTextEntry={secureInput}
						onChangeText={inputValue =>
							this._handleChooseInputMask(inputValue, inputType)
						}
						maxLength={maxLength}
						keyboardType={keyboardType}
						autoFocus={autoFocus}
						autoCapitalize={autoCapitalize}
						autoCorrect={false}
						underlineColorAndroid="transparent"
						placeholder={placeholder}
						placeholderTextColor={placeholderTextColor}
						defaultValue={inputValue}
						value={inputValue}
						returnKeyType={returnKeyType}
						autoComplete={autoComplete}
					/>
				</View>
			);
		} else {
			return (
				<View style={[customStyle, styles.wrapper]}>
					<Text style={[{ fontWeight, color, fontSize }, styles.label]}>
						{labelText}
					</Text>
					{inputType === 'password' ? (
						<TouchableOpacity
							style={styles.showButton}
							onPress={this.toggleShowPassword}
						>
							<Text style={styles.showButtonText}>
								{secureInput ? 'Mostrar' : 'Esconder'}
							</Text>
						</TouchableOpacity>
					) : null}
					<Animated.View
						style={[
							{ transform: [{ scale: iconScale }] },
							styles.checkmarkWrapper
						]}
					>
						<Icon name="check" color={Colors.white} size={20} />
					</Animated.View>
					<TextInput
						style={[
							{ color: inputColor, borderBottomColor: borderBottom },
							inputStyle,
							styles.inputField
						]}
						secureTextEntry={secureInput}
						onChangeText={this.onChangeText}
						maxLength={maxLength}
						keyboardType={keyboardType}
						autoFocus={autoFocus}
						autoCapitalize={autoCapitalize}
						autoCorrect={false}
						underlineColorAndroid="transparent"
						placeholder={placeholder}
						placeholderTextColor={placeholderTextColor}
						defaultValue={inputValue}
						value={inputValue}
						returnKeyType={returnKeyType}
						autoComplete={autoComplete}
					/>
				</View>
			);
		}
	}
}

InputField.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	labelTextSize: 12,
	labelColor: Colors.white,
	textColor: Colors.white,
	borderBottomColor: Colors.white,
	autoCapitalize: 'words',
	placeholderTextColor: Colors.white,
	keyboardType: 'default',
	maxLength: 50
};

InputField.propTypes = {
	labelText: PropTypes.string.isRequired,
	labelTextSize: PropTypes.number,
	labelColor: PropTypes.string,
	textColor: PropTypes.string,
	borderBottomColor: PropTypes.string,
	inputType: PropTypes.string.isRequired,
	customStyle: PropTypes.object,
	onChangeText: PropTypes.func,
	showCheckmark: PropTypes.bool.isRequired,
	autoFocus: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	labelTextWeight: PropTypes.string,
	inputStyle: PropTypes.object,
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	returnKeyType: PropTypes.string,
	autoComplete: PropTypes.string,
	placeholderTextColor: PropTypes.string,
	keyboardType: PropTypes.string,
	maxLength: PropTypes.number
};

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex'
	},
	label: {
		marginBottom: 20
	},
	inputField: {
		borderBottomWidth: 1,
		paddingTop: 5
	},
	showButton: {
		position: 'absolute',
		right: 0
	},
	showButtonText: {
		color: Colors.white,
		fontWeight: '700'
	},
	checkmarkWrapper: {
		position: 'absolute',
		right: 0,
		bottom: 12
	}
});
