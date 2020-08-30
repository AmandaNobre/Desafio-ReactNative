import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import ListDados from './componentes/ListDados'
import { receberDados } from './actions/dados'

class Listagem extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.props.receberDados()
    }

    render() {

        let dados = null
        this.props.dadosFiltrados == null ? dados = this.props.list : dados = this.props.dadosFiltrados

        return (
            <View>
                <ListDados list={dados} />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    list: state.dados.list,
    dadosFiltrados: state.dados.resultadoFiltro

})

export default connect(mapStateToProps, { receberDados })(Listagem)

