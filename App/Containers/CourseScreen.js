import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList,
	ActivityIndicator
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import { Images, Colors } from '../Themes';
import { Spinner, Button } from '../Components/Common';
// Styles
import styles from './Styles/CourseScreenStyles';

class CourseScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeInactive}
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
							color: focused ? Colors.black : Colors.greyAccent
						}
					]}
				>
					{'Cursos'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			courses: null,
			loading: true,
			showSpinner: true
		};
	}

	componentDidMount() {
		this._getCourses();
	}

	_getCourses = () => {
		// get courses
		const coursesRef = firebase.database().ref('cursos');
		coursesRef.on('value', snapshot => {
			let data = snapshot.val();
			let courses = Object.values(data);
			this.setState({ courses: courses, loading: false, showSpinner: false });
		});
	};

	_keyExtractor = item => item.id;

	_handleShowSpinner = () => {
		this.setState({ showSpinner: true });
	};

	_handleCloseSpinner = () => {
		this.setState({ showSpinner: false });
	};

	_renderSwipeableCard = item => {
		const { navigation } = this.props;
		const cardId = item.id;
		const cardThumbnail = item.thumbnail;
		const cardTitle = item.title;
		const cardAbout = item.about;
		const cardTotalHours = item.totalHours;

		return (
			<TouchableOpacity
				key={cardId}
				style={styles.contentSwipeableCardsList}
				onPress={() => navigation.navigate('Lessons', { item })}
			>
				<View style={styles.wrapperSwipeableCard}>
					<Image
						source={{ uri: cardThumbnail }}
						style={styles.thumbnailSwipeableCard}
						resizeMode={'contain'}
					/>
				</View>
				<View>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.titleSwipeableCard}
					>
						{cardTitle}
					</Text>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.aboutSwipeableCard}
					>
						{cardAbout}
					</Text>
				</View>
				<View style={styles.wrapperHour}>
					<View>
						<Image
							source={Images.iconFree}
							style={styles.iconFreeSwipeableCard}
							resizeMode={'cover'}
						/>
					</View>
					<View style={{ paddingLeft: 8 }}>
						<Image
							source={Images.iconBigClock}
							style={styles.iconHourSwipeableCard}
							resizeMode={'cover'}
						/>
					</View>
					<View style={{ paddingLeft: 5 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.hoursSwipeableCard}
						>
							{cardTotalHours}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	_renderSwipeableCardsList = () => {
		return (
			<View>
				<FlatList
					data={this.state.courses}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => this._renderSwipeableCard(item)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	};

	render() {
		const { courses } = this.state;
		if (!courses) {
			return <Spinner open={true} disableOnPressSpinner />;
		}
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperSectionTitle}>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.sectionTitleStyle}
					>
						{'Cursos'}
					</Text>
				</View>
				<ScrollView style={styles.container}>
					<View style={styles.wrapperContent}>
						<View style={styles.wrapperSwipeableCardsList}>
							{this._renderSwipeableCardsList()}
						</View>
					</View>
				</ScrollView>

				{<Spinner />}
			</View>
		);
	}
}

export default CourseScreen;
