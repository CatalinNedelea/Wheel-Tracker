import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import ENV from '../env';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MenuIcon from '../components/MenuIcon';

const SearchResults = (props) => {
	const typeState = useState(null);
	const route = useRoute();
	const navigation = useNavigation();
	const { originPlace, destinationPlace } = route.params;

	const origin = {
		latitude: originPlace.details.geometry.location.lat,
		longitude: originPlace.details.geometry.location.lng,
	};

	const destination = {
		latitude: destinationPlace.details.geometry.location.lat,
		longitude: destinationPlace.details.geometry.location.lng,
	};

	console.log(origin);
	console.log(destination);

	const mapRegion = {
		latitude: originPlace.details.geometry.location.lat,
		longitude: originPlace.details.geometry.location.lng,
		latitudeDelta: 0.005,
		longitudeDelta: 0.0001,
	};

	const places = useSelector((state) => state.places.places);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(placesActions.loadPlaces());
	}, [dispatch]);

	useEffect(() => {
		navigation.setOptions({
			headerLeft: (props) => <MenuIcon />,
		});
	});

	return (
		<View style={{ display: 'flex', justifyContent: 'space-between' }}>
			<View style={{ height: Dimensions.get('window').height }}>
				<MapView style={styles.map} region={mapRegion} showsUserLocation={true}>
					{places.map((val, index) => {
						return (
							<View key={index}>
								<MapViewDirections
									origin={{
										latitude: val.lat,
										longitude: val.lng,
									}}
									destination={origin}
									apikey={ENV.googleApiKey}
									strokeWidth={5}
									strokeColor="blue"
								/>
								<Marker
									coordinate={{
										latitude: val.lat,
										longitude: val.lng,
									}}
									title={'Bus Marker'}
								>
									<Image source={require('../styles/BUS.png')} style={{ height: 35, width: 35 }} />
								</Marker>
							</View>
						);
					})}
					<MapViewDirections
						origin={origin}
						destination={destination}
						apikey={ENV.googleApiKey}
						strokeWidth={5}
						strokeColor="red"
					/>
					<Marker coordinate={origin} title={'Origin'} />
					<Marker coordinate={destination} title={'Destination'} />
				</MapView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
});

export default SearchResults;
