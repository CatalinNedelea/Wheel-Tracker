import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeSearch from '../components/HomeSearch/HomeSearch';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as placesActions from '../store/places-actions';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function RoutesScreen() {
  const route = useRoute();

	const navigation = useNavigation();
	const mapRegion = {
		latitude: 45.3190833,
		longitude: 21.8852868,
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
		<View>
       <View style={{height: Dimensions.get('window').height - 200}}>
			<MapView style={styles.map} region={mapRegion} showsUserLocation={true}>
				{places.map((val, index) => {
					return (
						<Marker
							coordinate={{
								latitude: val.lat,
								longitude: val.lng,
							}}
							key={index}
							title={'Bus Marker'}
						>
							<Image source={require('../styles/BUS.png')} style={{ height: 35, width: 35 }} />
						</Marker>
					);
				})}
			</MapView>
      </View>
			<HomeSearch />
		</View>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
});
