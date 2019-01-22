import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Modal,
	Text,
	Image,
	ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

import { NavigationActions } from 'react-navigation';

import { Images } from '../../Themes';

//styles
import styles from './Styles/FlashCardStyles';

class FlashCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			correct: 0,
			wrong: 0,
			count: 1
		};
	}

	_checkOption1(obj) {
		let x = obj;
		let { correct, wrong, count } = this.state;
		if (x.option_1 === x.answer) {
			correct += 1;
			count += 1;
			this.setState({ correct, count });
		} else {
			wrong += 1;
			count += 1;
			this.setState({ wrong, count });
		}
	}

	_checkOption2(obj) {
		let x = obj;
		let { correct, wrong, count } = this.state;
		if (x.option_2 === x.answer) {
			correct += 1;
			count += 1;
			this.setState({ correct, count });
		} else {
			wrong += 1;
			count += 1;
			this.setState({ wrong, count });
		}
	}

	_renderQuestions() {
		const {
			quiz,
			score_minimo,
			open,
			onPressOutside,
			modalContent,
			overlayStyle,
			showButtonOnOverlay,
			showButtonOnModal,
			buttonOnOverlayStyle,
			buttonOnModalStyle,
			roundCorner,
			contentModalStyle,
			contentOverlayStyle
		} = this.props;
		const { count } = this.state;
		return (
			<View style={styles.questionsWrapper}>
				<Modal animationType="slide" transparent={false} visible={open}>
					<View style={styles.questionsContainer}>
						<View style={styles.questionsWrapperHeader}>
							<View style={styles.questionsHeader}>
								<TouchableOpacity
									style={styles.buttonLeft}
									onPress={() => {
										this.setState({
											correct: 0,
											wrong: 0,
											count: 1
										});
										return onPressOutside();
									}}
								>
									<Image
										source={Images.iconClose}
										style={styles.iconNavBar}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>
								<Text style={styles.questionsHeaderText}>{'Quiz'}</Text>
								<View style={styles.buttonRight} />
							</View>
						</View>

						<View style={styles.questionsBody}>
							<View style={styles.questionsWrapperProgress}>
								<Text style={styles.questionsProgressText}>
									Progress{' '}
									{quiz ? (
										<Text style={styles.questionsProgressCount}>
											{count}/{quiz.length - 1}
										</Text>
									) : null}
								</Text>
								<View style={styles.questionsProgress}>
									<View
										style={[
											styles.questionsProgressBar,
											{
												flex: count === 1 ? 0 : count / (quiz.length - 1)
											}
										]}
									/>
								</View>
							</View>
							<View style={styles.questionsCard}>
								<Image
									source={Images.cardBack}
									style={styles.flashCard}
									resizeMode={'contain'}
								/>
								<View style={styles.floatQuestionContent}>
									<ScrollView
										showsVerticalScrollIndicator={false}
										style={styles.scrollContainer}
									>
										{quiz ? (
											<Text>{quiz[count.toString()].question}</Text>
										) : null}
									</ScrollView>
								</View>
							</View>
						</View>

						<View style={styles.questionsFooter}>
							<View style={styles.tapToFlipWrapper}>
								<TouchableOpacity onPress={() => {}}>
									<Image
										source={Images.iconArrowLeftWhite}
										style={styles.tapToFlipImage}
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.footerWrapper}>
								<TouchableOpacity
									disabled={this.state.flipButton ? true : false}
									style={
										this.state.flipButton
											? styles.buttonDisabledCancel
											: styles.buttonCancel
									}
									onPress={() => {
										this._checkOption1(quiz[count.toString()]);
									}}
								>
									<Image
										source={Images.iconWrong}
										style={styles.iconFlashcardWrong}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>

								<TouchableOpacity
									disabled={this.state.flipButton ? true : false}
									style={
										this.state.flipButton
											? styles.buttonDisabledSuccess
											: styles.buttonSuccess
									}
									onPress={() => {
										this._checkOption2(quiz[count.toString()]);
									}}
								>
									<Image
										source={Images.iconCorrect}
										style={styles.iconFlashcardCorrect}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}

	render() {
		const { count, correct, wrong } = this.state;
		const { quiz, onPressOutside, navigation, score_minimo } = this.props;
		if (quiz && count > quiz.length - 1) {
			let score = 100 / (quiz.length - 1);
			let approved = score * correct > score_minimo;

			const resetAction = NavigationActions.reset({
				index: 1,
				actions: [
					NavigationActions.navigate({
						routeName: 'TabRoot',
						params: {},
						action: NavigationActions.navigate({
							routeName: 'CourseScreenTab'
						})
					}),
					NavigationActions.navigate({
						routeName: 'Result',
						params: {
							count,
							correct,
							wrong,
							sum: correct + wrong,
							approved,
							note: score > correct ? score * correct : correct * score
						}
					})
				]
			});
			return navigation.dispatch(resetAction);
			// return navigation.navigate('Result', {
			// count,
			// correct,
			// wrong,
			// sum: correct + wrong,
			// approved,
			// note: score > correct ? score * correct : correct * score
			// });
		} else {
			return this._renderQuestions();
		}
	}
}

FlashCard.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	open: false,
	onPressOutside: () => {},
	onValidSubmit: () => {},
	onPressCancel: () => {},
	modalContent: () => {},
	overlayStyle: styles.bottomOverlay,
	showButtonOnOverlay: false,
	showButtonOnModal: false,
	buttonOnOverlayStyle: styles.buttonOnOverlay,
	buttonOnModalStyle: styles.buttonOnModal,
	roundCorner: 6,
	contentModalStyle: styles.wrapperContent,
	contentOverlayStyle: styles.wrapperOverlay
};

FlashCard.propTypes = {
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
	open: PropTypes.bool,
	onPressOutside: PropTypes.func,
	onValidSubmit: PropTypes.func,
	onPressCancel: PropTypes.func,
	overlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	showButtonOnOverlay: PropTypes.bool,
	showButtonOnModal: PropTypes.bool,
	buttonOnOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	buttonOnModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	roundCorner: PropTypes.number,
	contentModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	contentOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default FlashCard;
