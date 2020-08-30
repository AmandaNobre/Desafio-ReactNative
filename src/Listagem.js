import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Pesquisa from './componentes/Pesquisa'
import ListDados from './componentes/ListDados'
import { receberDados, filtrarDados, limparFiltro } from './actions/dados'

class Listagem extends Component {

    constructor() {
        super()
        this.filtrarModuleId = this.filtrarModuleId.bind(this)
        this.filtrarLanguageId = this.filtrarLanguageId.bind(this)
        this.filtrarValue = this.filtrarValue.bind(this)
        this.limparFiltro = this.limparFiltro.bind(this)
    }

    componentDidMount() {
        this.props.receberDados()
    }

    filtrarModuleId(value) {
        this.props.filtrarDados(value)
    }

    filtrarLanguageId(value) {
        this.props.filtrarDados(value)
    }

    filtrarValue(value) {
        this.props.filtrarDados(value)
    }
    
    limparFiltro(){
        this.props.limparFiltro()
    }

    render() {

        let dados = null
        this.props.dadosFiltrados == null ? dados = this.props.list : dados = this.props.dadosFiltrados 

        return (
            <View>
                <Pesquisa
                    filtrarModuleId={this.filtrarModuleId}
                    filtrarLanguageId={this.filtrarLanguageId}
                    filtrarValue={this.filtrarValue} 
                    limparFiltro={this.limparFiltro}/>
                <ListDados list={dados} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    list: state.dados.list,
    dadosFiltrados: state.dados.resultadoFiltro

})

export default connect(mapStateToProps, { receberDados, filtrarDados, limparFiltro })(Listagem)