import { Provider } from 'react-redux'
import React, { Component } from 'react';
import {View} from 'react-native'

import store from './reducers/index'
import Listagem from './Listagem'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <Listagem></Listagem>
                </View>
            </Provider>
        )
    }
}