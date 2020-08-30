import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Rows, } from 'react-native-table-component'
import { connect } from 'react-redux'

import Pesquisa from './Pesquisa'
import { filtrarDados, limparFiltro } from '../actions/dados'

class ListDados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Resource_id', 'Updated_at', 'Value']
    }
    this.filtrarModuleId = this.filtrarModuleId.bind(this)
    this.filtrarLanguageId = this.filtrarLanguageId.bind(this)
    this.filtrarValue = this.filtrarValue.bind(this)
    this.limparFiltro = this.limparFiltro.bind(this)
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

  limparFiltro() {
    this.props.limparFiltro()
  }


  render() {

    const state = this.state;

    let list = []

    this.props.list != [] ? this.props.list.map((value, index) => {
      list[index] = [value.resource.resource_id, value.resource.updated_at, value.resource.value]
    }) : false


    return (

      <View>
        <ScrollView>
          <View style={styles.container2}>
            <Pesquisa
              filtrarModuleId={this.filtrarModuleId}
              filtrarLanguageId={this.filtrarLanguageId}
              filtrarValue={this.filtrarValue}
              limparFiltro={this.limparFiltro} />
          </View>

          <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#008000' }}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={list} textStyle={styles.text} />
            </Table>
          </View>
        </ScrollView>
      </View>

    )
  }
}
const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { filtrarDados, limparFiltro })(ListDados)

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#98FB98' },
  text: { margin: 6, height: 30, textAlign: 'center' }
});
