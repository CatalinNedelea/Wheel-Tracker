import React, { useState, useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import PlaceRow from './PlaceRow';

const homePlace = {
	description: 'Home',
	geometry: { location: { lat: 45.3190833, lng: 21.8852868 } },
};
const workPlace = {
	description: 'Work',
	geometry: { location: { lat: 45.3273632, lng: 21.87986 } },
};

const DestinationSearch = (props) => {

	const [originPlace, setOriginPlace] = useState(null);
	const [destinationPlace, setDestinationPlace] = useState(null);

	const navigation = useNavigation();

	const checkNavigation = () => {
		if (originPlace && destinationPlace) {
			navigation.navigate('SearchResults', {
				originPlace,
				destinationPlace,
			});
		}
	};

	useEffect(() => {
		checkNavigation();
	}, [originPlace, destinationPlace]);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<GooglePlacesAutocomplete
					placeholder="Where from?"
					onPress={(data, details = null) => {
						setOriginPlace({ data, details });
					}}
					enablePoweredByContainer={false}
					suppressDefaultStyles
					currentLocation={true}
					currentLocationLabel="Current location"
					styles={{
						textInput: styles.textInput,
						container: styles.autocompleteContainer,
						listView: styles.listView,
						separator: styles.separator,
					}}
					fetchDetails
					query={{
						key: 'AIzaSyBCIcWoomaiaVy7QT02n5r8axa03CA33_A',
						language: 'en',
					}}
					renderRow={(data) => <PlaceRow data={data} />}
					renderDescription={(data) => data.description || data.vicinity}
					predefinedPlaces={[homePlace, workPlace]}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where to?"
					onPress={(data, details = null) => {
						setDestinationPlace({ data, details });
					}}
					enablePoweredByContainer={false}
					suppressDefaultStyles
					styles={{
						textInput: styles.textInput,
						container: {
							...styles.autocompleteContainer,
							top: 55,
						},
						separator: styles.separator,
					}}
					fetchDetails
					query={{
						key: 'AIzaSyBCIcWoomaiaVy7QT02n5r8axa03CA33_A',
						language: 'en',
					}}
					renderRow={(data) => <PlaceRow data={data} />}
				/>
				<View style={styles.circle} />
				<View style={styles.line} />
				<View style={styles.square} />
			</View>
		</SafeAreaView>
	);
};

export default DestinationSearch;
