import React, { Component, Fragment } from 'react';
import { View, SafeAreaView, StatusBar, Platform } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import AppNavigation from '../Navigation/AppNavigation';
import { StatusBarColor } from '../Components/Common';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
	componentDidMount() {
		this._onInitializeApp();
	}
	_onInitializeApp = () => {
		// Initialize Firebase
		return firebase.initializeApp({
			apiKey: 'AIzaSyAwFtUEijpONqO-bb7ib79mk9uY_3v0eTY',
			authDomain: 'jambo-tech-73914.firebaseapp.com',
			databaseURL: 'https://jambo-tech-73914.firebaseio.com',
			projectId: 'jambo-tech-73914',
			storageBucket: 'jambo-tech-73914.appspot.com',
			messagingSenderId: '450730525637'
		});
	};

	_handlerStatusBar = () => {
		if (Platform.OS === 'ios') {
			return <StatusBar barStyle="light-content" />;
		} else {
			return (
				<StatusBarColor backgroundColor="#e36d0d" barStyle="light-content" />
			);
		}
	};
	render() {
		return (
			<Fragment>
				<SafeAreaView style={{ flex: 0, backgroundColor: '#e36d0d' }} />
				<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
					<View style={styles.applicationView}>
						{this._handlerStatusBar()}
						<AppNavigation />
					</View>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default RootContainer;
