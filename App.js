import React from 'react';
import { combineReducers } from 'redux';
import placesReducer from './store/places-reducer';
import busesReducer from './store/buses-reducer';
import { init, init2 } from './helpers/db';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

init()
	.then(() => {
		console.log('Initialized database');
	})
	.catch((err) => {
		console.log('Initializing db failed.');
		console.log(err);
	});

init2()
	.then(() => {
		console.log('Initialized database buses');
	})
	.catch((err) => {
		console.log('Initializing db buses failed.');
		console.log(err);
	});

const rootReducer = combineReducers({
	places: placesReducer,
	buses: busesReducer,
});
export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} />
				<StatusBar />
			</SafeAreaProvider>
		);
	}
}
