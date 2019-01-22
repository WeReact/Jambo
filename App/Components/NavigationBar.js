import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

//styles
import styles from './Styles/NavigationBarStyles';

class NavigationBar extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {
			onPressBack,
			NavigationBarStyle,
			onPressBackStyle,
			wrapperNavigationBarStyle,
			contentNavigationBarStyle,
			wrapperBarStyle,
			barStyle,
			wrapperTitleStyle,
			titleStyle,
			title
		} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.leftActionWrapper}>{onPressBack()}</View>
				<View style={styles.wrapper}>
					<View style={styles.content}>
						<View style={styles.wrapperBar}>
							<View style={styles.barStyle} />
						</View>
						<View style={styles.wrapperTitle}>
							<Text style={styles.titleStyle}>{title}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

NavigationBar.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	onPressBack: () => {},
	NavigationBarStyle: styles.container,
	onPressBackStyle: styles.leftActionWrapper,
	wrapperNavigationBarStyle: styles.wrapper,
	contentNavigationBarStyle: styles.content,
	wrapperBarStyle: styles.wrapperBar,
	barStyle: styles.barStyle,
	wrapperTitleStyle: styles.wrapperTitle,
	titleStyle: styles.titleStyle,
	title: 'Title'
};

NavigationBar.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	onPressBack: PropTypes.func,
	NavigationBarStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	onPressBackStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	wrapperNavigationBarStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	contentNavigationBarStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	wrapperBarStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	barStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	wrapperTitleStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	titleStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	title: PropTypes.string
};

export default NavigationBar;
