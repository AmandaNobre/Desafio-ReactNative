import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Pesquisa from './componentes/Pesquisa'
import ListDados from './componentes/ListDados'
import { receberDados, filtrarDados } from './actions/dados'

class Listagem extends Component {

    constructor() {
        super()
        this.filtrarModuleId = this.filtrarModuleId.bind(this)
        this.filtrarLanguageId = this.filtrarLanguageId.bind(this)
        this.filtrarValue = this.filtrarValue.bind(this)
    }

    componentDidMount() {
        this.props.receberDados()
        //this.props.filtrar()
    }

    filtrarModuleId(value) {
        console.log("filtrarResourceId")
        console.log("value", value.type)
        this.props.filtrarDados(value)
    }

    filtrarLanguageId(value) {
        console.log("filtrarLanguageId")
        console.log("value", value.value)
        this.props.filtrarDados(value)
    }

    filtrarValue(value) {
        console.log("filtrarValue")
        console.log("value: ", value.value)
        this.props.filtrarDados(value)
    }

    render() {

        let dados = null
        this.props.dadosFiltrados == null ? dados = this.props.list : dados = this.props.dadosFiltrados 

        return (
            <View>
                <Pesquisa
                    filtrarModuleId={this.filtrarModuleId}
                    filtrarLanguageId={this.filtrarLanguageId}
                    filtrarValue={this.filtrarValue} />
                <ListDados list={dados} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    list: state.dados.list,
    dadosFiltrados: state.dados.resultadoFiltro

})

export default connect(mapStateToProps, { receberDados, filtrarDados })(Listagem)