import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { registerRootComponent } from 'expo';

import App from './src/App';
//const store = createStore(rootReducer, applyMiddleware(thunk))

registerRootComponent(App);

AppRegistry.registerComponent(appName, () => App);