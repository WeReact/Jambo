import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList,
	Linking
} from 'react-native';
import { Images, Colors } from '../Themes';
import axios from 'axios';
import { RandomColor } from '../Lib/Utils';

// Styles
import styles from './Styles/NewsScreenStyles';

class NewsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconBookActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconBookInactive}
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
					{'News'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {
			news: {}
		};
	}

	componentDidMount() {
		// this._getNews();
	}

	// _getNews = () => {
	//     // get news
	//     axios.get('https://nkengenharia.webnode.com.br/rss/all.xml')
	//     .then(res => {
	//         const news = res.data;
	//         this.setState({ news });
	//     })
	// }

	_handleShowSpinner = () => {
		this.setState({ showSpinner: true });
	};

	_handleCloseSpinner = () => {
		this.setState({ showSpinner: false });
	};
	_openLink = link => {
		Linking.openURL(link);
	};

	_keyExtractor = item => item.id;

	_renderNews = (item, index) => {
		const { navigation } = this.props;
		const newsId = item.id;
		const newsTitle = item.title;
		const newsAbout = item.description;
		const newsLink = item.link;
		let i = index + 1;
		return (
			<TouchableOpacity
				key={newsId}
				style={styles.contentLesson}
				onPress={() => this._openLink(newsLink)}
			>
				<View style={{ paddingLeft: 20, flex: 1 }}>
					<Text
						style={styles.lessonTitle}
						numberOfLines={2}
						ellipsizeMode={'tail'}
					>
						{newsTitle}
					</Text>
					<View style={{ marginTop: 10 }}>
						<Text
							style={styles.lessonAbout}
							numberOfLines={4}
							ellipsizeMode={'tail'}
						>
							{newsAbout}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	_renderNewsList = () => {
		const data = [
			{
				id: '1',
				title:
					'A Coordenadoria do Mestrado em Engenharia Civil divulga o resultado dos candidatos aprovados no Processo Seletivo de 2010/1, bem como o resultado da prova de suficiência em Inglês.',
				link:
					'http://nkengenharia.webnode.com.br/news/a%20coordenadoria%20do%20mestrado%20em%20engenharia%20civil%20divulga%20o%20resultado%20dos%20candidatos%20aprovados%20no%20processo%20seletivo%20de%202010-1%2c%20bem%20como%20o%20resultado%20da%20prova%20de%20sufici%c3%aancia%20em%20ingl%c3%aas-/',
				description:
					'Relação em ordem alfabética, isto é, não representa a classificação do candidato na seleção - O&#160;curso terá início em 21 de fevereiro de 2011 e a matrícula será realizada na primeira semana de aula.'
			},
			{
				id: '2',
				title: 'Revista Eletrônica de Engenharia Civil',
				link:
					'http://nkengenharia.webnode.com.br/news/revista-eletronica-de-engenharia-civil/',
				description:
					'REEC - Revista Eletrônica de Engenharia Civil http://revistas.ufg.br/index.php/reec/index'
			},
			{
				id: '3',
				title: '63ª Reunião Anual da SBPC',
				link:
					'http://nkengenharia.webnode.com.br/news/a63%c2%aa%20reuni%c3%a3o%20anual%20da%20sbpc/',
				description:
					'&#160;Acontecerá em Goiânia entre os dias 10 e 15 de julho de 2011 na Universidade Federal de Goiás.'
			},
			{
				id: '4',
				title: '53° Congresso Brasileiro do Concreto',
				link:
					'http://nkengenharia.webnode.com.br/news/a53%c2%b0%20congresso%20brasileiro%20do%20concreto/',
				description:
					'&#160;Será realizado no período: de 01 a 04 de novembro de 2011 Local: CENTROSUL – Baía Sul – Centro Florianópolis/SC'
			},
			{
				id: '5',
				title:
					'V Simpósio sobre Solos Tropicais e Processos Erosivos no Centro-Oeste e o II GEOCENTRO',
				link:
					'http://nkengenharia.webnode.com.br/news/v-simposio-sobre-solos-tropicais-e-processos-erosivos-no-centro-oeste-e-o-ii-geocentro/',
				description:
					'Prezados colegas,Foi com grande satisfação que nos impusemos o desafio de realizar um dos mais importantes eventos nacionais, o VI INFOGEO, simultaneamente com dois principais eventos geotécnicos do Centro Oeste, o Simpósio sobre Solos Tropicais e Processos Erosivos no Centro-Oeste e o II GEOCENTRO, no período de 07 a 09 de abril de 2011. Este mega encontro priorizará a multidisciplinaridade e a interdisciplinaridade, pois durante o evento geotécnicos,...'
			}
		];
		return (
			<View>
				<FlatList
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => this._renderNews(item, index)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperSectionTitle}>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.sectionTitleStyle}
					>
						{'News'}
					</Text>
				</View>
				<ScrollView style={styles.container}>
					<View style={styles.wrapperContent}>{this._renderNewsList()}</View>
				</ScrollView>
			</View>
		);
	}
}

export default NewsScreen;
