import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import HomeScreen from "../screens/HomeScreen";
import RoutesScreen from "../screens/RoutesScreen";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import PlacesNavigator from "./PlacesNavigator";
import BusesNavigator from "./BusesNavigator";
import placesReducer from "../store/places-reducer";
import busesReducer from "../store/buses-reducer";
import DestinationSearch from '../screens/DestinationSearch/index'
import SearchResults from "../screens/SearchResults";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Program Autobuze" component={ProgramNavigator} />
      <Drawer.Screen name="Live vehicles" component={VehiclesNavigator} />
      <Drawer.Screen name="Alege ruta" component={RoutesNavigator} />
    </Drawer.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const VehiclesStack = createStackNavigator();

function Vehicles() {
  const rootReducer = combineReducers({
    places: placesReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

function VehiclesNavigator() {
  return (
    <VehiclesStack.Navigator>
      <VehiclesStack.Screen name="Live vehicles" component={Vehicles} />
    </VehiclesStack.Navigator>
  );
}

const ProgramStack = createStackNavigator();

function Program() {
  const rootReducer = combineReducers({
    buses: busesReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <BusesNavigator />
    </Provider>
  );
}

function ProgramNavigator() {
  return (
    <ProgramStack.Navigator>
      <ProgramStack.Screen name="Program autobuze" component={Program} />
    </ProgramStack.Navigator>
  );
}

const RoutesStack = createStackNavigator();

function Routes() {
  const rootReducer = combineReducers({
    places: placesReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <RoutesScreen />
    </Provider>
  );
}

function Search() {
  const rootReducer = combineReducers({
    places: placesReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <SearchResults />
    </Provider>
  );
}

function RoutesNavigator() {
  return (
    <RoutesStack.Navigator>
      <RoutesStack.Screen name="RoutesScreen" component={Routes} />
      <RoutesStack.Screen name={"DestinationSearch"} component={DestinationSearch} />
      <RoutesStack.Screen name={"SearchResults"} component={Search} />
    </RoutesStack.Navigator>
  );
}
