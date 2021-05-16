import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import BusesListScreen from '../screens/BusesListScreen';
import BusDetailScreen from '../screens/BusDetailScreen';
import NewBusScreen from '../screens/NewBusScreen';
import Colors from '../constants/Colors';

const BusesNavigator = createStackNavigator(
  {
    ListaAutobuze: BusesListScreen,
    DBus: BusDetailScreen,
    NewBus: NewBusScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

export default createAppContainer(BusesNavigator);
