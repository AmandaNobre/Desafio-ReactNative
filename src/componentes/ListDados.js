import { Col, Row, Grid } from "react-native-easy-grid";
import React, { Component } from "react";
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
class ListDados extends Component {

    render() {
        return (
            <ScrollView>
                <Row>
                    <Col>
                        <Text>Resource_id</Text>
                    </Col>
                    <Col>
                        <Text>Updated_at</Text>
                    </Col>
                    <Col>
                        <Text>   Value</Text>
                    </Col>
                </Row>
                <SafeAreaView>
                    <ScrollView>
                        {this.props.list != [] ? this.props.list.map((value, index) => {
                            return (
                                <Row key={index} >
                                    <Col>
                                        <Text>{value.resource.resource_id}</Text>
                                    </Col>
                                    <Col>
                                        <Text>{value.resource.updated_at}</Text>
                                    </Col>
                                    <Col>
                                        <Text>   {value.resource.value}</Text>
                                    </Col>
                                </Row>
                            )
                        }) : false
                        }
                    </ScrollView>
                </SafeAreaView>
            </ScrollView >
        )
    }
}
export default ListDados
