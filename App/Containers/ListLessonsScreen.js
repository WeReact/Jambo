import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Images, Colors } from '../Themes';
import { Button, FlashCard, Spinner } from '../Components/Common';
import { RandomColor } from '../Lib/Utils';

// Styles
import styles from './Styles/ListLessonsStyle';

class ListLessonsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {
			openQuiz: false,
			quiz: null,
			score_minimo: null
		};
	}

	componentDidMount(){
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { item } = params;
		const quiz = item.quiz.questions;
		const score_minimo = item.quiz.score_minimo;
		this.setState({quiz, score_minimo})
	}

	/**
	 * Handle to setState on _handleOpenQuiz state (to open the modal).
	 * @author samuelmataraso
	 * @method _handleOpenQuiz
	 * @param none
	 * @return state
	 */
	_handleOpenQuiz = () => {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { item } = params;
		const quiz = item.quiz.questions;
		const score_minimo = item.quiz.score_minimo;
		this.setState({ openQuiz: true, quiz, score_minimo });
	};

	/**
	 * Handle to setState on _handleOpenQuiz state (to close the modal).
	 * @author samuelmataraso
	 * @method _handleOpenQuiz
	 * @param none
	 * @return {state} state
	 */
	_handleCloseQuiz = () => {
		this.setState({ openQuiz: false });
	};

	_keyExtractor = item => item.id;

	_renderLesson = (item, index) => {
		const { navigation } = this.props;
		const lessonId = item.id;
		const lessonTitle = item.title;
		const lessonAbout = item.conteudo;
		const lessonVideo = item.video;
		let i = index + 1;
		return (
			<TouchableOpacity
				key={lessonId}
				style={styles.contentLesson}
				onPress={() =>
					navigation.navigate('LessonDetail', {
						title: lessonTitle,
						description: lessonAbout,
						videoLink: lessonVideo
					})
				}
			>
				<View
					style={[
						styles.wrapperRadius,
						{
							backgroundColor: RandomColor()
								.toLowerCase()
								.includes('fff')
								? '#944dff'.toLowerCase()
								: RandomColor().toLowerCase()
						}
					]}
				>
					<Text style={styles.lessonNumber}>{i}</Text>
				</View>
				<View style={{ paddingLeft: 20, flex: 1 }}>
					<Text
						style={styles.lessonTitle}
						numberOfLines={2}
						ellipsizeMode={'tail'}
					>
						{lessonTitle}
					</Text>
					<View style={{ marginTop: 5 }}>
						<Text
							style={styles.lessonAbout}
							numberOfLines={2}
							ellipsizeMode={'tail'}
						>
							{lessonAbout}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	_renderLessonsList = () => {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { item } = params;
		const aulas = item.aulas;
		return (
			<View>
				<FlatList
					data={aulas}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => this._renderLesson(item, index)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	};

	render() {
		const { openQuiz, quiz, score_minimo } = this.state;
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		if (!params && !params.item ){
			return (
				<Spinner
					open={true}
					disableOnPressSpinner
				/>
			)
		}
		const { item } = params;
		const aulas = item.aulas;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperSectionTitle}>
					<TouchableOpacity
						style={styles.wrapperHeaderLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							style={styles.iconArrowLeft}
							source={Images.iconArrowLeftOrange}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.sectionTitleStyle}
					>
						{'Aulas'}
					</Text>
				</View>
				<ScrollView style={styles.container}>
					<View style={styles.wrapperContent}>
						<View style={styles.wrapperSwipeableCardsList}>
							{this._renderLessonsList()}
						</View>
						<View>
							<Button
								labelButton={'Iniciar Quiz'}
								buttonStyle={styles.actionButtonStyle}
								onPress={() => this._handleOpenQuiz()}
							/>
						</View>
					</View>
					{
						<FlashCard
							quiz={quiz}
							score_minimo={score_minimo}
							open={openQuiz}
							dataScreen={item}
							navigation={navigation}
							onPressOutside={() => this._handleCloseQuiz()}
						/>
					}
					{
						<Spinner />
					}
				</ScrollView>
			</View>
		);
	}
}

export default ListLessonsScreen;
