import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { registerRootComponent } from 'expo';

import App from './src/App';

registerRootComponent(App);

AppRegistry.registerComponent(appName, () => App);