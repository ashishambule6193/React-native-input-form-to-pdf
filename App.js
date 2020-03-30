import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListSCreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import countScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

import ChatScreen from './src/screens/ChatScreen';
import VideoCall from './src/screens/VideoCall';
import InputBoxScreen from './src/screens/InputBoxScreen';

// import {  } from 'react-native';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Video: VideoCall,
    Input: InputBoxScreen
    // Components: ComponentsScreen,

    // List: ListSCreen,
    // Image: ImageScreen,
    // Count: countScreen,
    // Color: ColorScreen,
    // Square: SquareScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Test App 1'
    }
  }
);

export default createAppContainer(navigator);
