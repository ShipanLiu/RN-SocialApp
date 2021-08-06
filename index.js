/**
 * @format
 */
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './src/App';
// import App from './DEMOS/06-TodoApp/01-Todo-version1/App';
// import App from './DEMOS/04-MoshSaleApp/App';
// import App from './DEMOS/07-MusicUI/App';
import App from './DEMOS/06-TodoApp/03-useContextVersion/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
AppRegistry.registerComponent(appName, () => App);
