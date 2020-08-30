import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export default class Pesquisa extends Component {

    render() {
        return (
            <React.Fragment>
                <Filter
                    filtrarModuleId={this.props.filtrarModuleId}
                    filtrarLanguageId={this.props.filtrarLanguageId}
                    filtrarValue={this.props.filtrarValue} 
                    limparFiltro={this.props.limparFiltro}/>
            </React.Fragment>
        )
    }
}

const Filter = ({ filtrarModuleId, filtrarLanguageId, filtrarValue, limparFiltro }) => {
    return (
        <React.Fragment>
            <TextInput placeholder="Module_id"
                onChangeText={(value) => filtrarModuleId({ value, type: 'Module_id' })} />
            <TextInput placeholder="Language_id"
                onChangeText={(value) => filtrarLanguageId({ value, type: 'Language_id' })} />
            <TextInput placeholder="Value"
                onChangeText={(value) => filtrarValue({ value, type: 'Value' })} />
            <Button 
            onPress={() => limparFiltro()}
            title="Limpar Filtro" />
        </React.Fragment>
    )
}