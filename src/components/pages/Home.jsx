import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import Service from "./Home/Service"

export default class Home extends Component {
    render() {
        return (
            <Container fluid={true}>
                Home

                <Row>
                    <Col >

                    </Col>
                </Row>

                <Service />
            </Container>
        );
    }
}