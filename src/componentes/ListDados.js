import { Col, Row, Grid } from "react-native-easy-grid";
import React, { Component } from "react";
import { Text } from 'react-native'
class ListDados extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.list != [] ? this.props.list.map((value, index) => {
                    return (
                        <Grid>
                            <Row key={index}>
                                <Col>
                                    <Text>Resource_id</Text>
                                    <Text>{value.resource.resource_id}</Text>
                                </Col>
                                <Col>
                                    <Text>Updated_at</Text>
                                    <Text>{value.resource.updated_at}</Text>
                                </Col>
                                <Col>
                                    <Text>Value</Text>
                                    <Text>{value.resource.value}</Text>
                                </Col>
                            </Row>
                        </Grid >
                    )
                }) : false}
            </React.Fragment>
        )
    }
}
export default ListDados



