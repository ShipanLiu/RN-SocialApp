/**
 * @format
 */
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './src/App';
// import App from './small demos/01-Context API/App';
import App from './WeatherApp/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
AppRegistry.registerComponent(appName, () => App);
