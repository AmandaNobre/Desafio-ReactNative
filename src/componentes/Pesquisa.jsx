import React, { Component } from 'react'
import {TextInput, Button } from 'react-native'

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
                onChangeText={(value) => filtrarModuleId({ value, type: 'Module_id' })}  style={{  borderColor: '#008000', borderWidth: 2 }}/>
            <TextInput placeholder="Language_id"
                onChangeText={(value) => filtrarLanguageId({ value, type: 'Language_id' })}  style={{  borderColor: '#008000', borderWidth: 2 }}/>
            <TextInput placeholder="Value"
                onChangeText={(value) => filtrarValue({ value, type: 'Value' })}  style={{  borderColor: '#008000', borderWidth: 2 }}/>
            <Button 
            onPress={() => limparFiltro()}
            title="Limpar Filtro" 
            color='#008000'
            />
        </React.Fragment>
    )
}