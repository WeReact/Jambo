import React from 'react';
import { View } from 'react-native';
import styles from './Styles/LineSeparatorStyles';

/**
 * render the line separator between items
 * @author samuelmataraso
 * @method LineSeparator
 * @param none
 * @return {func} render
 */
const LineSeparator = props => {
	const { lineStyle } = props;
	return <View style={[styles.lineStyle, lineStyle]} />;
};

export default LineSeparator;
